'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

type RoomStatus = 'disponivel' | 'ocupado' | 'limpeza' | 'bloqueado' | 'entra_hoje' | 'sai_hoje' | 'vencido';

interface Room {
    id: number;
    name: string;
    status: RoomStatus;
    guestName?: string;
    dates?: string;
}

const initialRooms: Room[] = [
    { id: 1, name: 'QUARTO 1', status: 'entra_hoje', guestName: 'Caroline Silva', dates: '01/03/2019 - 05/03/2019' },
    { id: 2, name: 'QUARTO 2', status: 'ocupado', guestName: 'Joelson de Abreu', dates: '27/02/2019 - 05/03/2019' },
    { id: 3, name: 'QUARTO 3', status: 'disponivel' },
    { id: 4, name: 'QUARTO 4', status: 'ocupado', guestName: 'Leonardo Coutinho', dates: '27/02/2019 - 05/03/2019' },
    { id: 5, name: 'QUARTO 5', status: 'limpeza', guestName: 'Joelson de Abreu', dates: '27/02/2019 - 05/03/2019' },
    { id: 6, name: 'QUARTO 6', status: 'disponivel' },
    { id: 7, name: 'QUARTO 7', status: 'ocupado', guestName: 'Vinícius Faermann', dates: '27/02/2019 - 07/03/2019' },
    { id: 8, name: 'QUARTO 8', status: 'disponivel' },
];

export default function HomePage() {
    const router = useRouter();
    const [filter, setFilter] = useState<RoomStatus | 'todos'>('todos');

    const filteredRooms = filter === 'todos'
        ? initialRooms
        : initialRooms.filter(room => room.status === filter);

    const getStatusColor = (status: RoomStatus) => {
        switch (status) {
            case 'disponivel': return '#2ecc71';
            case 'ocupado': return '#e74c3c';
            case 'limpeza': return '#95a5a6';
            case 'bloqueado': return '#34495e';
            case 'entra_hoje': return '#3498db';
            case 'sai_hoje': return '#f1c40f';
            case 'vencido': return '#9b59b6';
            default: return '#95a5a6';
        }
    };

    const handleRoomClick = (id: number) => {
        // Navigate to details or open modal - for now using a standard route
        router.push(`/reservas?quarto=${id}`);
    };

    const StatusFilter = ({ label, count, statusValue, color, borderColor }: { label: string, count: number, statusValue: RoomStatus | 'todos', color: string, borderColor: string }) => {
        const isActive = filter === statusValue;
        return (
            <button
                onClick={() => setFilter(statusValue)}
                className={`flex items-center gap-2 px-3 py-1 rounded-sm border whitespace-nowrap transition-all ${isActive ? 'ring-2 ring-offset-1 ring-slate-300 shadow-md' : 'opacity-80 hover:opacity-100'}`}
                style={{ backgroundColor: color, borderColor: borderColor, color: statusValue === 'todos' ? '#64748b' : 'white' }}
            >
                <span className="font-semibold">{label} : {count}</span>
            </button>
        );
    };

    return (
        <div className="bg-slate-50 min-h-screen flex font-sans text-slate-600">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="" breadcrumb="Home" />

                {/* Status Bar */}
                <div className="px-8 py-4 bg-white border-b border-slate-200 shadow-sm z-10">
                    <div className="flex items-center gap-3 text-xs font-semibold overflow-x-auto pb-1">
                        <StatusFilter label="todos" count={10} statusValue="todos" color="#f1f5f9" borderColor="#e2e8f0" />
                        <StatusFilter label="disponível" count={5} statusValue="disponivel" color="#2ecc71" borderColor="#27ae60" />
                        <StatusFilter label="ocupado" count={3} statusValue="ocupado" color="#e74c3c" borderColor="#c0392b" />
                        <StatusFilter label="em limpeza" count={1} statusValue="limpeza" color="#95a5a6" borderColor="#7f8c8d" />
                        <StatusFilter label="bloqueado" count={1} statusValue="bloqueado" color="#34495e" borderColor="#2c3e50" />

                        <span className="text-slate-300 mx-2">|</span>

                        <StatusFilter label="entra hoje" count={1} statusValue="entra_hoje" color="#3498db" borderColor="#2980b9" />
                        <StatusFilter label="sai hoje" count={0} statusValue="sai_hoje" color="#f1c40f" borderColor="#f39c12" />
                        <StatusFilter label="vencido" count={0} statusValue="vencido" color="#9b59b6" borderColor="#8e44ad" />

                        <div className="flex-1"></div>
                        <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-slate-600">layers</span>
                    </div>
                </div>

                <div className="flex-1 p-8 overflow-y-auto bg-slate-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredRooms.map((room) => (
                            <div
                                key={room.id}
                                onClick={() => handleRoomClick(room.id)}
                                className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64 cursor-pointer hover:shadow-md transition-shadow group"
                            >
                                <div
                                    className="px-4 py-3 flex justify-between items-center text-white"
                                    style={{ backgroundColor: getStatusColor(room.status) }}
                                >
                                    <span className="font-bold text-sm">{room.name}</span>
                                    <span className="material-symbols-outlined text-sm">remove</span>
                                </div>

                                <div className="p-4 flex-1 flex flex-col justify-center">
                                    {(room.status === 'disponivel') ? (
                                        <div className="flex flex-col items-center text-slate-200">
                                            <span className="material-symbols-outlined text-4xl mb-2">person_outline</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col h-full justify-start pt-2">
                                            <div className="flex items-center gap-2 mb-3 text-slate-600">
                                                <span className="material-symbols-outlined text-lg opacity-70">person</span>
                                                <span className="text-sm font-medium">{room.guestName}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                                <span className="material-symbols-outlined text-sm opacity-70">calendar_today</span>
                                                <span>{room.dates}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="px-4 py-3 border-t border-slate-100 flex justify-center items-center bg-slate-50/50 group-hover:bg-slate-100 transition-colors">
                                    {room.status === 'disponivel' && (
                                        <button className="px-4 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white hover:text-blue-500 hover:border-blue-400 transition-colors flex items-center gap-1 uppercase tracking-wide bg-white">
                                            <span className="material-symbols-outlined text-sm">login</span> hospedar
                                        </button>
                                    )}
                                    {room.status === 'limpeza' && (
                                        <div className="w-full flex justify-between items-center">
                                            <button className="px-3 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white hover:text-green-600 hover:border-green-500 transition-colors flex items-center gap-1 bg-white"
                                                onClick={(e) => { e.stopPropagation(); alert('Liberando UH...'); }}
                                            >
                                                <span className="material-symbols-outlined text-sm">cleaning_services</span> Liberar UH
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 hover:text-slate-600 transition-colors bg-white">
                                                <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                            </button>
                                        </div>
                                    )}
                                    {(room.status === 'ocupado' || room.status === 'entra_hoje') && (
                                        <div className="w-full flex justify-between items-center">
                                            {room.status === 'entra_hoje' ? (
                                                <button className="px-3 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white hover:text-blue-600 hover:border-blue-500 transition-colors flex items-center gap-1 bg-white">
                                                    <span className="material-symbols-outlined text-sm rotate-90">login</span> hospedar
                                                </button>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <button className="text-slate-400 hover:text-[#e74c3c]" onClick={(e) => { e.stopPropagation(); alert('Check-out initiated'); }}><span className="material-symbols-outlined text-lg">thumb_down</span></button>
                                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">segment</span></button>
                                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">mail</span></button>
                                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">description</span></button>
                                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">group</span></button>
                                                </div>
                                            )}
                                            <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 hover:text-slate-600 transition-colors bg-white">
                                                <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
