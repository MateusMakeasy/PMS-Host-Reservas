import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function HomePage() {
    return (
        <div className="bg-slate-50 min-h-screen flex font-sans text-slate-600">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="" breadcrumb="Home" />

                {/* Status Bar */}
                <div className="px-8 py-4 bg-white border-b border-slate-200">
                    <div className="flex items-center gap-4 text-xs font-semibold overflow-x-auto">
                        <span className="px-3 py-1 rounded-sm bg-slate-100 text-slate-500 border border-slate-200 whitespace-nowrap">todos : 10</span>
                        <span className="px-3 py-1 rounded-sm bg-[#2ecc71] text-white border border-[#27ae60] whitespace-nowrap">disponível : 5</span>
                        <span className="px-3 py-1 rounded-sm bg-[#e74c3c] text-white border border-[#c0392b] whitespace-nowrap">ocupado : 3</span>
                        <span className="px-3 py-1 rounded-sm bg-[#95a5a6] text-white border border-[#7f8c8d] whitespace-nowrap">em limpeza : 1</span>
                        <span className="px-3 py-1 rounded-sm bg-[#34495e] text-white border border-[#2c3e50] whitespace-nowrap">bloqueado : 1</span>
                        <span className="text-slate-300 mx-2">|</span>
                        <span className="px-3 py-1 rounded-sm bg-[#3498db] text-white whitespace-nowrap">entra hoje : 1</span>
                        <span className="px-3 py-1 rounded-sm bg-[#f1c40f] text-white whitespace-nowrap">sai hoje : 0</span>
                        <span className="px-3 py-1 rounded-sm bg-[#9b59b6] text-white whitespace-nowrap">vencido : 0</span>
                        <div className="flex-1"></div>
                        <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-slate-600">layers</span>
                    </div>
                </div>

                <div className="flex-1 p-8 overflow-y-auto bg-slate-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* QUARTO 1 - Entra Hoje (Blue) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#3498db] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 1</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-slate-600">
                                    <span className="material-symbols-outlined text-lg opacity-70">person</span>
                                    <span className="text-sm font-medium">Caroline Silva</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <span className="material-symbols-outlined text-sm opacity-70">calendar_today</span>
                                    <span>01/03/2019 - 05/03/2019</span>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <button className="px-3 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white transition-colors flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm rotate-90">login</span> hospedar
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 transition-colors">
                                    <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 2 - Ocupado (Red) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#e74c3c] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 2</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-slate-600">
                                    <span className="material-symbols-outlined text-lg opacity-70">person</span>
                                    <span className="text-sm font-medium">Joelson de Abreu</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <span className="material-symbols-outlined text-sm opacity-70">calendar_today</span>
                                    <span>27/02/2019 - 05/03/2019</span>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <div className="flex gap-2">
                                    <button className="text-slate-400 hover:text-[#e74c3c]"><span className="material-symbols-outlined text-lg">thumb_down</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">segment</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">mail</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">description</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">group</span></button>
                                </div>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 transition-colors">
                                    <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 3 - Disponível (Green) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#2ecc71] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 3</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-center items-center text-slate-200">
                                <span className="material-symbols-outlined text-4xl mb-2">person_outline</span>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-center items-center bg-slate-50/50">
                                <button className="px-4 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white transition-colors flex items-center gap-1 uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-sm">login</span> hospedar
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 4 - Ocupado (Red) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#e74c3c] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 4</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-slate-600">
                                    <span className="material-symbols-outlined text-lg opacity-70">person</span>
                                    <span className="text-sm font-medium">Leonardo Coutinho</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <span className="material-symbols-outlined text-sm opacity-70">calendar_today</span>
                                    <span>27/02/2019 - 05/03/2019</span>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <div className="flex gap-2">
                                    <button className="text-slate-400 hover:text-[#e74c3c]"><span className="material-symbols-outlined text-lg">thumb_down</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">segment</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">mail</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">description</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">group</span></button>
                                </div>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 transition-colors">
                                    <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 5 - Limpeza (Grey) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#95a5a6] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 5</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-slate-600">
                                    <span className="material-symbols-outlined text-lg opacity-70">person</span>
                                    <span className="text-sm font-medium">Joelson de Abreu</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <span className="material-symbols-outlined text-sm opacity-70">calendar_today</span>
                                    <span>27/02/2019 - 05/03/2019</span>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <button className="px-3 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white transition-colors flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">cleaning_services</span> Liberar UH
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 transition-colors">
                                    <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 6 - Disponível (Green) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#2ecc71] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 6</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-center items-center text-slate-200">
                                <span className="material-symbols-outlined text-4xl mb-2">person_outline</span>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-center items-center bg-slate-50/50">
                                <button className="px-4 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white transition-colors flex items-center gap-1 uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-sm">login</span> hospedar
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 7 - Ocupado (Red) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#e74c3c] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 7</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-slate-600">
                                    <span className="material-symbols-outlined text-lg opacity-70">person</span>
                                    <span className="text-sm font-medium">Vinícius Faermann</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <span className="material-symbols-outlined text-sm opacity-70">calendar_today</span>
                                    <span>27/02/2019 - 07/03/2019</span>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <div className="flex gap-2">
                                    <button className="text-slate-400 hover:text-[#e74c3c]"><span className="material-symbols-outlined text-lg">thumb_down</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">segment</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">mail</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">description</span></button>
                                    <button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined text-lg">group</span></button>
                                </div>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded hover:bg-white text-slate-400 transition-colors">
                                    <span className="material-symbols-outlined text-sm">subdirectory_arrow_right</span>
                                </button>
                            </div>
                        </div>

                        {/* QUARTO 8 - Disponível (Green) */}
                        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col h-64">
                            <div className="bg-[#2ecc71] px-4 py-3 flex justify-between items-center text-white">
                                <span className="font-bold text-sm">QUARTO 8</span>
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-center items-center text-slate-200">
                                <span className="material-symbols-outlined text-4xl mb-2">person_outline</span>
                            </div>
                            <div className="px-4 py-3 border-t border-slate-100 flex justify-center items-center bg-slate-50/50">
                                <button className="px-4 py-1 text-xs font-medium text-slate-500 border border-slate-300 rounded hover:bg-white transition-colors flex items-center gap-1 uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-sm">login</span> hospedar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
