'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// --- Types ---
type RoomType = 'Standard' | 'Duplo' | 'Triplo' | 'Luxo' | 'Luxo Superior';

interface Room {
    id: number;
    name: string;
    type: RoomType;
}

interface Reservation {
    id: string;
    roomId: number;
    guestName: string;
    status: 'confirmado' | 'hospedado' | 'pendente' | 'bloqueado' | 'limpeza' | 'cancelado';
    checkIn: string; // YYYY-MM-DD
    checkOut: string; // YYYY-MM-DD
    price?: number;
    origin?: string; // Booking, Airbnb, Direta
    email?: string;
    phone?: string;
}

// --- Mock Data ---
const ROOMS: Room[] = [
    { id: 101, name: '101', type: 'Standard' },
    { id: 102, name: '102', type: 'Standard' },
    { id: 103, name: '103', type: 'Standard' },
    { id: 104, name: '104', type: 'Standard' },
    { id: 105, name: '105', type: 'Standard' },
    { id: 106, name: 'Apto 06', type: 'Duplo' },
    { id: 107, name: 'Apto 07', type: 'Duplo' },
    { id: 108, name: 'Apto 08', type: 'Duplo' },
    { id: 109, name: 'Apto 09', type: 'Triplo' },
    { id: 110, name: 'Apto 10', type: 'Triplo' },
    { id: 111, name: 'Apto 11', type: 'Luxo' },
    { id: 112, name: 'Apto 12', type: 'Luxo' },
];

const INITIAL_RESERVATIONS: Reservation[] = [
    { id: '1', roomId: 102, guestName: 'Ana Silva', status: 'hospedado', checkIn: '2024-02-28', checkOut: '2024-03-02', price: 1200, origin: 'Booking.com', email: 'ana@email.com' },
    { id: '2', roomId: 103, guestName: 'Bruno Souza', status: 'confirmado', checkIn: '2024-02-26', checkOut: '2024-02-29', price: 900, origin: 'Direta', email: 'bruno@email.com' },
    { id: '3', roomId: 105, guestName: 'Limpeza', status: 'limpeza', checkIn: '2024-02-27', checkOut: '2024-02-28' },
    { id: '4', roomId: 106, guestName: 'Carlos Lima', status: 'hospedado', checkIn: '2024-02-25', checkOut: '2024-02-28', price: 1050, origin: 'Airbnb', email: 'carlos@email.com' },
    { id: '5', roomId: 107, guestName: 'Lady Gaga', status: 'pendente', checkIn: '2024-03-01', checkOut: '2024-03-05', price: 5000, origin: 'Booking.com', email: 'gaga@email.com' },
    { id: '6', roomId: 101, guestName: 'Vinicius Faermann', status: 'confirmado', checkIn: '2024-02-26', checkOut: '2024-03-01', price: 1800, email: 'vinicius@email.com' },
    { id: '7', roomId: 109, guestName: 'Família Souza', status: 'confirmado', checkIn: '2024-03-02', checkOut: '2024-03-06', price: 2400, email: 'familia@email.com' },
    { id: '8', roomId: 112, guestName: 'Manutenção', status: 'bloqueado', checkIn: '2024-02-29', checkOut: '2024-03-04' },
];

// --- Helpers ---
const CELL_WIDTH = 60; // px
const ROW_HEIGHT = 56; // px (h-14)

const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};

const getDaysArray = (start: Date, days: number) => {
    const dates = [];
    for (let i = 0; i < days; i++) {
        dates.push(addDays(start, i));
    }
    return dates;
};

const getDayName = (date: Date) => {
    const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    return days[date.getDay()];
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'hospedado': return { bg: 'bg-[#2ECC71]', border: 'border-green-600', text: 'text-white' };
        case 'confirmado': return { bg: 'bg-[#3498DB]', border: 'border-blue-600', text: 'text-white' };
        case 'pendente': return { bg: 'bg-[#F1C40F]', border: 'border-yellow-600', text: 'text-white' };
        case 'limpeza': return { bg: 'bg-[#95a5a6]', border: 'border-slate-600', text: 'text-white' };
        case 'bloqueado': return { bg: 'bg-[#34495e]', border: 'border-slate-800', text: 'text-white' };
        case 'cancelado': return { bg: 'bg-red-400', border: 'border-red-600', text: 'text-white' };
        default: return { bg: 'bg-slate-400', border: 'border-slate-600', text: 'text-white' };
    }
};

export default function MapaPage() {
    // State
    const [currentDate, setCurrentDate] = useState(new Date(2024, 1, 26)); // Feb 26, 2024
    const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
    const [hoveredRes, setHoveredRes] = useState<string | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [selectedRes, setSelectedRes] = useState<Reservation | null>(null);

    // Drag State
    const [draggingRes, setDraggingRes] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Mouse offset relative to element
    const [dragCurrent, setDragCurrent] = useState({ x: 0, y: 0 }); // Current mouse screen pos

    // Refs
    const gridRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<{ id: string, initialX: number, initialY: number, startCheckIn: Date, startRoomId: number } | null>(null);

    // Timeline Settings
    const daysToShow = 21;
    const timelineDates = useMemo(() => getDaysArray(currentDate, daysToShow), [currentDate]);

    // Group rooms by type
    const roomsByType = useMemo(() => {
        const groups: Record<string, Room[]> = {};
        ROOMS.forEach(room => {
            if (!groups[room.type]) groups[room.type] = [];
            groups[room.type].push(room);
        });
        return groups;
    }, []);

    const flatRooms = useMemo(() => {
        return Object.values(roomsByType).flat();
    }, [roomsByType]);

    // Handlers
    const handlePrev = () => setCurrentDate(prev => addDays(prev, -7));
    const handleNext = () => setCurrentDate(prev => addDays(prev, 7));
    const handleToday = () => setCurrentDate(new Date());

    const handleMouseDown = (e: React.MouseEvent, res: Reservation) => {
        e.stopPropagation(); // Prevent opening modal
        e.preventDefault();

        setDraggingRes(res.id);
        const rect = e.currentTarget.getBoundingClientRect();

        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setDragCurrent({ x: e.clientX, y: e.clientY });

        dragRef.current = {
            id: res.id,
            initialX: e.clientX,
            initialY: e.clientY,
            startCheckIn: new Date(res.checkIn),
            startRoomId: res.roomId
        };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (draggingRes) {
                setDragCurrent({ x: e.clientX, y: e.clientY });
            }
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (draggingRes && dragRef.current) {
                const deltaX = e.clientX - dragRef.current.initialX;
                const deltaY = e.clientY - dragRef.current.initialY;

                const dayDiff = Math.round(deltaX / CELL_WIDTH);
                const rowDiff = Math.round(deltaY / ROW_HEIGHT);

                // Apply changes
                if (dayDiff !== 0 || rowDiff !== 0) {
                    setReservations(prev => prev.map(r => {
                        if (r.id === draggingRes) {
                            // Update dates
                            const newStart = addDays(dragRef.current!.startCheckIn, dayDiff);
                            const oldStart = new Date(r.checkIn);
                            const oldEnd = new Date(r.checkOut);
                            const duration = (oldEnd.getTime() - oldStart.getTime()) / (1000 * 60 * 60 * 24);
                            const newEnd = addDays(newStart, duration);

                            // Update Room
                            // Find current room index
                            const currentRoomIndex = flatRooms.findIndex(room => room.id === dragRef.current!.startRoomId);
                            let newRoomId = r.roomId;
                            if (currentRoomIndex !== -1) {
                                const newIndex = Math.max(0, Math.min(flatRooms.length - 1, currentRoomIndex + rowDiff));
                                newRoomId = flatRooms[newIndex].id;
                            }

                            return {
                                ...r,
                                checkIn: formatDate(newStart),
                                checkOut: formatDate(newEnd),
                                roomId: newRoomId
                            };
                        }
                        return r;
                    }));
                }

                setDraggingRes(null);
                dragRef.current = null;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggingRes, flatRooms]);


    const handleMouseEnter = (e: React.MouseEvent, resId: string) => {
        if (draggingRes) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({ x: rect.left + rect.width / 2, y: rect.bottom + 10 });
        setHoveredRes(resId);
    };

    const handleMouseLeave = () => {
        setHoveredRes(null);
    };

    const handleReservationClick = (e: React.MouseEvent, res: Reservation) => {
        e.stopPropagation();
        if (!draggingRes) setSelectedRes(res);
    };

    const getReservationStyle = (res: Reservation) => {
        // ... logic mostly same, but need to account for dragging if specific reservation is being moved
        // Visualization of dragging is tricky with React render cycle, usually we use transform: translate on the active element

        const startDate = new Date(currentDate.toISOString().split('T')[0]);
        const checkIn = new Date(res.checkIn);
        const checkOut = new Date(res.checkOut);

        const diffTime = checkIn.getTime() - startDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const durationTime = checkOut.getTime() - checkIn.getTime();
        const durationDays = Math.ceil(durationTime / (1000 * 60 * 60 * 24));

        const left = diffDays * CELL_WIDTH;
        const width = durationDays * CELL_WIDTH;

        // Apply drag transform
        let transform = 'none';
        let zIndex = 10;
        let opacity = 1;

        if (draggingRes === res.id) {
            zIndex = 50;
            const deltaX = dragCurrent.x - dragRef.current!.initialX;
            const deltaY = dragCurrent.y - dragRef.current!.initialY;
            transform = `translate(${deltaX}px, ${deltaY}px)`;
            opacity = 0.9;
        }

        return { left: `${left}px`, width: `${width}px`, transform, zIndex, opacity };
    };

    return (
        <div className="bg-slate-50 min-h-screen flex font-sans text-slate-600">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Mapa de Reservas" breadcrumb="Mapa" />

                {/* --- Controls Bar --- */}
                <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-white border-b border-slate-200 z-20">
                    <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                        <button onClick={handlePrev} className="p-2 rounded hover:bg-white hover:text-brand-teal transition-colors text-slate-500">
                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                        </button>
                        <span className="px-4 text-sm font-bold text-slate-700 whitespace-nowrap min-w-[180px] text-center">
                            {timelineDates[0].toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })} - {timelineDates[timelineDates.length - 1].toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                        <button onClick={handleNext} className="p-2 rounded hover:bg-white hover:text-brand-teal transition-colors text-slate-500">
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                        <div className="w-px h-6 bg-slate-300 mx-2"></div>
                        <button onClick={handleToday} className="px-3 py-1 text-xs font-bold uppercase text-brand-teal border border-brand-teal/20 bg-teal-50 rounded hover:bg-teal-100 transition-colors">
                            Hoje
                        </button>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-4 text-[10px] font-bold uppercase text-slate-500">
                            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#3498DB] rounded-sm"></span> Reservado</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#2ECC71] rounded-sm"></span> Hospedado</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#95a5a6] rounded-sm"></span> Limpeza</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#34495e] rounded-sm"></span> Bloqueado</div>
                        </div>
                        <button className="bg-brand-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-colors" onClick={() => alert('Abrir modal de Nova Reserva')}>
                            <span className="material-symbols-outlined text-lg">add</span> Nova Reserva
                        </button>
                    </div>
                </div>

                {/* --- Timeline Grid --- */}
                <div className="flex-1 overflow-hidden flex flex-col relative bg-white select-none">
                    <div className="flex-1 overflow-auto relative custom-scrollbar" ref={gridRef}>
                        <div style={{ minWidth: `${200 + (daysToShow * CELL_WIDTH)}px` }} className="relative">

                            {/* --- Grid Header --- */}
                            <div className="sticky top-0 z-10 flex border-b border-slate-200 bg-slate-50 shadow-sm h-[60px]">
                                <div className="sticky left-0 w-[200px] flex-shrink-0 bg-slate-100 border-r border-slate-200 flex items-center justify-center z-20">
                                    <span className="text-xs font-bold text-slate-500 uppercase">Acomodações / Datas</span>
                                </div>
                                <div className="flex">
                                    {timelineDates.map((date, i) => {
                                        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                                        const isToday = formatDate(date) === formatDate(new Date());

                                        return (
                                            <div key={i} style={{ width: CELL_WIDTH }} className={`flex flex-col items-center justify-center border-r border-slate-100 ${isToday ? 'bg-blue-50/50' : 'bg-transparent'}`}>
                                                <span className={`text-[10px] font-bold ${isWeekend ? 'text-red-400' : 'text-slate-400'}`}>
                                                    {getDayName(date)}
                                                </span>
                                                <span className={`text-sm font-bold ${isWeekend ? 'text-red-500' : 'text-slate-700'} ${isToday ? 'text-brand-teal' : ''}`}>
                                                    {date.getDate()}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* --- Grid Body --- */}
                            <div className="relative">
                                {/* Vertical Grid Lines */}
                                <div className="absolute inset-0 flex pl-[200px] pointer-events-none z-0">
                                    {timelineDates.map((date, i) => {
                                        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                                        return (
                                            <div key={i} style={{ width: CELL_WIDTH }} className={`h-full border-r border-slate-100 ${isWeekend ? 'bg-slate-50/50' : ''}`}></div>
                                        );
                                    })}
                                </div>

                                {/* Rows */}
                                {Object.entries(roomsByType).map(([type, rooms]) => (
                                    <React.Fragment key={type}>
                                        <div className="sticky left-0 z-10 bg-slate-100/90 backdrop-blur-sm border-y border-slate-200 px-4 py-1 text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                                            {type}
                                        </div>

                                        {rooms.map(room => (
                                            <div key={room.id} className="relative h-14 border-b border-slate-100/50 hover:bg-blue-50/10 transition-colors group flex">
                                                {/* Left Room Column */}
                                                <div className="sticky left-0 w-[200px] flex-shrink-0 bg-white border-r border-slate-200 flex items-center justify-between px-4 z-10 group-hover:bg-slate-50 transition-colors">
                                                    <span className="font-bold text-slate-700 text-sm">{room.name}</span>
                                                    <button className="text-slate-300 hover:text-slate-500"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                                                </div>

                                                {/* Reservations Container */}
                                                <div className="relative flex-1 h-full">
                                                    {reservations.filter(r => r.roomId === room.id).map(res => {
                                                        const pos = getReservationStyle(res);
                                                        const colors = getStatusColor(res.status);

                                                        const resEnd = new Date(res.checkOut);
                                                        const timelineStart = timelineDates[0];
                                                        if (resEnd < timelineStart) return null;

                                                        return (
                                                            <div
                                                                key={res.id}
                                                                onMouseDown={(e) => handleMouseDown(e, res)}
                                                                onClick={(e) => handleReservationClick(e, res)}
                                                                onMouseEnter={(e) => handleMouseEnter(e, res.id)}
                                                                onMouseLeave={handleMouseLeave}
                                                                style={{ left: pos.left, width: pos.width, transform: pos.transform, zIndex: pos.zIndex, opacity: pos.opacity }}
                                                                className={`absolute top-2 bottom-2 rounded-md shadow-sm border-l-4 ${colors.bg} ${colors.border} ${colors.text} px-2 py-0.5 text-xs font-semibold cursor-pointer hover:brightness-110 hover:shadow-md transition-shadow overflow-hidden whitespace-nowrap`}
                                                            >
                                                                <div className="flex flex-col justify-center h-full leading-tight pointer-events-none">
                                                                    <span className="truncate">{res.guestName}</span>
                                                                    {(parseInt(pos.width) > 50 || draggingRes === res.id) && <span className="text-[9px] font-normal opacity-90 truncate">{res.status}</span>}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Tooltip (Hover) --- */}
                {hoveredRes && !draggingRes && !selectedRes && (
                    <div
                        className="fixed bg-white rounded-lg shadow-xl border border-slate-200 p-4 z-50 w-64 pointer-events-none transform -translate-x-1/2"
                        style={{ left: tooltipPos.x, top: tooltipPos.y }}
                    >
                        {(() => {
                            const res = reservations.find(r => r.id === hoveredRes);
                            if (!res) return null;
                            const colors = getStatusColor(res.status);

                            return (
                                <div className="flex flex-col gap-2">
                                    <div className={`text-xs font-bold uppercase px-2 py-1 rounded w-fit ${colors.bg} ${colors.text}`}>
                                        {res.status}
                                    </div>
                                    <h4 className="font-bold text-lg text-slate-800">{res.guestName}</h4>
                                    <div className="text-xs text-slate-500">
                                        <p>{new Date(res.checkIn).toLocaleDateString('pt-BR')} - {new Date(res.checkOut).toLocaleDateString('pt-BR')}</p>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}

                {/* --- Edit Popup (Modal) --- */}
                {selectedRes && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={() => setSelectedRes(null)}>
                        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
                            {/* Popup Header */}
                            <div className="bg-brand-teal p-4 flex justify-between items-start text-white">
                                <div>
                                    <h3 className="text-lg font-bold">Detalhes da Reserva</h3>
                                    <p className="text-teal-100 text-sm">#{selectedRes.id}</p>
                                </div>
                                <button onClick={() => setSelectedRes(null)} className="text-teal-100 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Popup Body */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-800 mb-1">{selectedRes.guestName}</h2>
                                        <p className="text-sm text-slate-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">mail</span>
                                            {selectedRes.email || 'Email não informado'}
                                        </p>
                                    </div>
                                    <div className={`px-3 py-1 rounded text-xs font-bold uppercase ${getStatusColor(selectedRes.status).bg} ${getStatusColor(selectedRes.status).text}`}>
                                        {selectedRes.status}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Check-in</label>
                                        <div className="font-semibold text-slate-700">{new Date(selectedRes.checkIn).toLocaleDateString('pt-BR')}</div>
                                        <div className="text-xs text-slate-500">14:00</div>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Check-out</label>
                                        <div className="font-semibold text-slate-700">{new Date(selectedRes.checkOut).toLocaleDateString('pt-BR')}</div>
                                        <div className="text-xs text-slate-500">12:00</div>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                        <span className="text-sm text-slate-500">Valor Total</span>
                                        <span className="font-bold text-slate-800">R$ {selectedRes.price?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                        <span className="text-sm text-slate-500">Origem</span>
                                        <span className="font-medium text-slate-700 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">public</span> {selectedRes.origin || 'Direta'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 bg-brand-teal text-white py-2 rounded-lg font-bold hover:bg-teal-600 transition-colors">
                                        Editar Reserva
                                    </button>
                                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors" title="Mais opções">
                                        <span className="material-symbols-outlined">more_horiz</span>
                                    </button>
                                </div>
                            </div>

                            {/* Popup Footer Links */}
                            <div className="bg-slate-50 p-3 border-t border-slate-200 grid grid-cols-3 divide-x divide-slate-200 text-center">
                                <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">Fichas</button>
                                <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">Financeiro</button>
                                <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">Histórico</button>
                            </div>
                        </div>
                    </div>
                )}


            </main>
        </div>
    );
}
