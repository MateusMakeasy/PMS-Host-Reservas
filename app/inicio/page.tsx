import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col">
                <Header title="Principais Indicadores" breadcrumb="Indicadores" />

                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Taxa de Ocupação</p>
                                <p className="text-3xl font-bold text-brand-teal mt-1">30.0%</p>
                                <p className="text-xs text-slate-400 mt-1">Hoje</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-brand-teal">
                                <span className="material-symbols-outlined">pie_chart</span>
                            </div>
                        </div>

                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">RevPAR</p>
                                <p className="text-3xl font-bold text-brand-blue mt-1">R$ 189,58</p>
                                <p className="text-xs text-slate-400 mt-1">Média por quarto</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                                <span className="material-symbols-outlined">monitoring</span>
                            </div>
                        </div>

                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Receita do Dia</p>
                                <p className="text-3xl font-bold text-status-green mt-1">R$ 2.865,00</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-status-green">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                        </div>

                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Novas Reservas</p>
                                <p className="text-3xl font-bold text-purple-500 mt-1">3</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                                <span className="material-symbols-outlined">event_available</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Nº de Hóspedes</p>
                                <p className="text-3xl font-bold text-orange-500 mt-1">7</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                        </div>

                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Diária Média</p>
                                <p className="text-3xl font-bold text-indigo-500 mt-1">R$ 631,94</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>

                        <div className="card p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Despesas</p>
                                <p className="text-3xl font-bold text-status-red mt-1">R$ 450,00</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-status-red">
                                <span className="material-symbols-outlined">money_off</span>
                            </div>
                        </div>
                    </div>

                    <div className="card p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-slate-800">Fluxo de Reservas (Próximos 7 dias)</h3>
                            <Link href="/reservas" className="text-sm text-brand-blue font-medium hover:underline">Ver relatório completo</Link>
                        </div>

                        <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-l border-slate-100 relative">
                            {/* Simple Bar Chart Visualization */}
                            <div className="w-full bg-blue-50 rounded-t-md hover:bg-blue-100 transition-colors relative group" style={{ height: '40%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Seg</span>
                            </div>
                            <div className="w-full bg-blue-50 rounded-t-md hover:bg-blue-100 transition-colors relative group" style={{ height: '65%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">65%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Ter</span>
                            </div>
                            <div className="w-full bg-blue-50 rounded-t-md hover:bg-blue-100 transition-colors relative group" style={{ height: '50%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">50%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Qua</span>
                            </div>
                            <div className="w-full bg-blue-50 rounded-t-md hover:bg-blue-100 transition-colors relative group" style={{ height: '80%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">80%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Qui</span>
                            </div>
                            <div className="w-full bg-brand-teal/20 rounded-t-md hover:bg-brand-teal/30 transition-colors relative group" style={{ height: '95%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">95%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-teal">Sex</span>
                            </div>
                            <div className="w-full bg-brand-teal/20 rounded-t-md hover:bg-brand-teal/30 transition-colors relative group" style={{ height: '90%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">90%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-teal">Sáb</span>
                            </div>
                            <div className="w-full bg-blue-50 rounded-t-md hover:bg-blue-100 transition-colors relative group" style={{ height: '45%' }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">45%</div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Dom</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
