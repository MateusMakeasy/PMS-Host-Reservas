import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DayUsePage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Gerenciamento de Day Use" breadcrumb="Day Use" />

                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="pl-10 pr-4 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal w-80 shadow-sm"
                                />
                            </div>
                            <input
                                type="date"
                                className="pl-3 pr-3 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal shadow-sm bg-white text-slate-600"
                            />
                        </div>
                        <button className="btn-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">wb_sunny</span>
                            <span>Novo Day Use</span>
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h3 className="font-bold text-slate-700">Day Use Ativos - Hoje</h3>
                            <span className="bg-blue-100 text-brand-blue text-xs font-bold px-2 py-1 rounded">3 ativos</span>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white border-b border-slate-200">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Hóspede</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Horário</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Acesso</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-slate-800">Ana Clara Souza</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">09:00 - 18:00</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Piscina, Sauna</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Check-in
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">visibility</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-slate-800">Roberto Martins</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">10:00 - 17:00</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Piscina</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Check-in
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">visibility</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-slate-800">Família Oliveira</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">08:00 - 19:00</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Total</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pendente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">visibility</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
