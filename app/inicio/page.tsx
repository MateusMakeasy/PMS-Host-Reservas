import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardPage() {
    return (
        <div className="bg-slate-50 min-h-screen flex font-sans text-slate-600">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="" breadcrumb="Indicadores" />

                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-lg font-bold text-slate-700 uppercase tracking-wide">Principais Indicadores</h2>
                            <span className="text-sm text-brand-teal font-medium bg-teal-50 px-2 py-0.5 rounded cursor-pointer hover:bg-teal-100">[Hoje]</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Row 1 */}
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-brand-teal">30.0%</p>
                                    <p className="text-sm text-slate-500 font-medium">Taxa de ocupação</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-brand-teal">layers</span>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-brand-teal">R$ 189,58</p>
                                    <p className="text-sm text-slate-500 font-medium">RevPAR</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-brand-teal">grid_view</span>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-brand-teal">R$ 2.865,00</p>
                                    <p className="text-sm text-slate-500 font-medium">Receitas</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-brand-teal">credit_card</span>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-brand-teal">3</p>
                                    <p className="text-sm text-slate-500 font-medium">Novas reservas</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-brand-teal">calendar_today</span>
                            </div>

                            {/* Row 2 */}
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-brand-teal">7</p>
                                    <p className="text-sm text-slate-500 font-medium">Nº de hóspedes</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-brand-teal">group</span>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-orange-400">R$ 631,94</p>
                                    <p className="text-sm text-slate-500 font-medium">Diária média</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-orange-400">trending_up</span>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-status-red">R$ 450,00</p>
                                    <p className="text-sm text-slate-500 font-medium">Despesas</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-status-red">credit_card</span>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-purple-600">0</p>
                                    <p className="text-sm text-slate-500 font-medium">Reservas canceladas</p>
                                </div>
                                <span className="material-symbols-outlined text-3xl text-purple-600">event_busy</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-slate-700 uppercase tracking-wide mb-4">Principais Gráficos</h2>

                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-sm font-bold text-slate-600 uppercase">Reservas (27/02 - 04/03)</h3>
                                <div className="flex gap-4 text-xs font-medium">
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-brand-teal rounded-sm"></span> Novas</div>
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-status-red rounded-sm"></span> Canceladas</div>
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-orange-400 rounded-sm"></span> No Show</div>
                                </div>
                            </div>

                            <div className="h-64 border-l border-b border-slate-200 flex items-end relative mx-4">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="border-t border-slate-100 w-full h-0"></div>
                                    <div className="border-t border-slate-100 w-full h-0"></div>
                                    <div className="border-t border-slate-100 w-full h-0"></div>
                                    <div className="border-t border-slate-100 w-full h-0"></div>
                                    <div className="border-t border-slate-100 w-full h-0"></div>
                                </div>

                                {/* Y-Axis Labels */}
                                <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400">
                                    <span>25</span>
                                    <span>20</span>
                                    <span>15</span>
                                    <span>10</span>
                                    <span>5</span>
                                </div>

                                {/* Bars - Just simulated as per original code but cleaner */}
                                <div className="w-full flex justify-around items-end h-full pt-4 z-10">
                                    {/* Monday - Has data */}
                                    <div className="flex gap-1 h-full items-end pb-[1px]">
                                        <div className="w-4 bg-brand-teal h-[40%] rounded-t-sm relative group cursor-pointer">
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100">10</div>
                                        </div>
                                    </div>
                                    {/* Empty days just for spacing/grid visualization */}
                                    <div className="w-4"></div>
                                    <div className="w-4"></div>
                                    <div className="w-4"></div>
                                    <div className="w-4"></div>
                                    <div className="w-4"></div>
                                    <div className="w-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
