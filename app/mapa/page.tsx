import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MapaPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Mapa de Reservas" breadcrumb="Mapa" />

                <div className="flex-1 flex flex-col p-6 overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center bg-white p-1 rounded-md shadow-sm border border-slate-200">
                            <button className="p-2 rounded hover:bg-slate-100 text-slate-500">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <span className="px-4 text-sm font-semibold whitespace-nowrap text-slate-700">26 Fev - 11 Mar, 2024</span>
                            <button className="p-2 rounded hover:bg-slate-100 text-slate-500">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                            <span className="h-6 w-px bg-slate-200 mx-1"></span>
                            <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:text-brand-teal">Hoje</button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-xs text-slate-500 mr-4">
                                <span className="w-3 h-3 bg-[#3498DB] rounded-sm"></span> Reservado
                                <span className="w-3 h-3 bg-[#2ECC71] rounded-sm"></span> Hospedado
                                <span className="w-3 h-3 bg-[#E74C3C] rounded-sm"></span> Limpeza
                            </div>
                            <button className="btn-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">add</span>
                                <span>Nova Reserva</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="overflow-auto flex-1">
                            <div className="grid relative" style={{ gridTemplateColumns: "180px 1fr", minWidth: "2000px" }}>
                                {/* Header Corner */}
                                <div className="sticky top-0 left-0 bg-slate-50 z-30 border-b border-r border-slate-200 p-4 flex items-center justify-center h-16">
                                    <span className="font-bold text-slate-500 text-xs uppercase tracking-wider">Acomodações</span>
                                </div>

                                {/* Date Header */}
                                <div className="sticky top-0 bg-slate-50 z-20 border-b border-slate-200 h-16">
                                    <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] h-full">
                                        {['26', '27', '28', '29', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map((day, i) => (
                                            <div key={day} className={`text-center flex flex-col justify-center border-r border-slate-200 ${['02', '03', '09', '10'].includes(day) ? 'bg-slate-50/50' : ''}`}>
                                                <span className={`text-[10px] uppercase font-bold ${['02', '03', '09', '10'].includes(day) ? 'text-status-red' : 'text-slate-400'}`}>
                                                    {['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'][i % 7]}
                                                </span>
                                                <span className={`text-lg font-bold leading-none ${['02', '03', '09', '10'].includes(day) ? 'text-status-red' : 'text-slate-700'}`}>{day}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Rooms Sidebar */}
                                <div className="grid grid-cols-1 divide-y divide-slate-200 sticky left-0 bg-white z-10 border-r border-slate-200">
                                    <div className="bg-slate-50/80 px-4 py-2 text-xs font-bold text-slate-500 uppercase flex items-center h-10">Standard</div>
                                    {[101, 102, 103, 104].map(room => (
                                        <div key={room} className="text-sm font-semibold text-slate-700 h-14 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group relative">
                                            {room}
                                            <span className="absolute right-2 opacity-0 group-hover:opacity-100 cursor-pointer text-slate-400"><span className="material-symbols-outlined text-[16px]">more_vert</span></span>
                                        </div>
                                    ))}
                                    <div className="bg-slate-50/80 px-4 py-2 text-xs font-bold text-slate-500 uppercase flex items-center h-10">Duplo</div>
                                    {[105, 106, 107, 108, 109, 110].map(room => (
                                        <div key={room} className="text-sm font-semibold text-slate-700 h-14 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group relative">
                                            {room}
                                            <span className="absolute right-2 opacity-0 group-hover:opacity-100 cursor-pointer text-slate-400"><span className="material-symbols-outlined text-[16px]">more_vert</span></span>
                                        </div>
                                    ))}
                                </div>

                                {/* Reservation Grid */}
                                <div className="relative bg-white">
                                    <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] h-full divide-x divide-slate-200">
                                        {Array.from({ length: 15 }).map((_, i) => <div key={i} className="bg-transparent"></div>)}
                                    </div>

                                    <div className="absolute inset-0 grid grid-cols-1 divide-y divide-slate-200 pt-10"> {/* Offset for first category header */}
                                        {/* Row 101 */}
                                        <div className="h-14 relative group hover:bg-slate-50/30"></div>
                                        {/* Row 102 */}
                                        <div className="h-14 relative group hover:bg-slate-50/30">
                                            <div className="absolute top-2 bottom-2 bg-status-green/20 border-l-4 border-status-green rounded-r text-xs p-1 flex flex-col justify-center overflow-hidden hover:brightness-95 cursor-pointer shadow-sm transition-all" style={{ left: "20%", width: "20%" }}>
                                                <span className="font-bold text-green-900 truncate">Ana Silva</span>
                                                <span className="text-[10px] text-green-800">Check-in</span>
                                            </div>
                                        </div>
                                        {/* Row 103 */}
                                        <div className="h-14 relative group hover:bg-slate-50/30">
                                            <div className="absolute top-2 bottom-2 bg-brand-blue/20 border-l-4 border-brand-blue rounded-r text-xs p-1 flex flex-col justify-center overflow-hidden hover:brightness-95 cursor-pointer shadow-sm transition-all" style={{ left: "6.66%", width: "20%" }}>
                                                <span className="font-bold text-blue-900 truncate">Bruno Souza</span>
                                                <span className="text-[10px] text-blue-800">Confirmado</span>
                                            </div>
                                        </div>
                                        {/* Row 104 */}
                                        <div className="h-14 relative group hover:bg-slate-50/30"></div>

                                        <div className="h-10"></div> {/* Category Header Offset */}

                                        {/* Row 105 */}
                                        <div className="h-14 relative group hover:bg-slate-50/30">
                                            <div className="absolute top-2 bottom-2 bg-status-yellow/20 border-l-4 border-status-yellow rounded-r text-xs p-1 flex flex-col justify-center overflow-hidden hover:brightness-95 cursor-pointer shadow-sm transition-all" style={{ left: "40%", width: "6.66%" }}>
                                                <span className="font-bold text-yellow-900 truncate">Limpeza</span>
                                            </div>
                                        </div>
                                        {/* Row 106 */}
                                        <div className="h-14 relative group hover:bg-slate-50/30">
                                            <div className="absolute top-2 bottom-2 bg-status-green/20 border-l-4 border-status-green rounded-r text-xs p-1 flex flex-col justify-center overflow-hidden hover:brightness-95 cursor-pointer shadow-sm transition-all" style={{ left: "0%", width: "26.66%" }}>
                                                <span className="font-bold text-green-900 truncate">Carlos Lima</span>
                                                <span className="text-[10px] text-green-800">Hospedado</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
