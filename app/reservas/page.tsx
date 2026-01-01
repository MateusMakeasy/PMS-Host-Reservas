import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function ReservasPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Gerenciamento de Reservas" breadcrumb="Reservas" />

                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    type="text"
                                    placeholder="Buscar hóspede, quarto..."
                                    className="pl-10 pr-4 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal w-80 shadow-sm"
                                />
                            </div>

                            <select className="pl-3 pr-10 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal shadow-sm bg-white text-slate-600">
                                <option>Todos os Status</option>
                                <option>Confirmada</option>
                                <option>Hospedado</option>
                                <option>Cancelada</option>
                            </select>
                        </div>

                        <button className="btn-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">add_circle</span>
                            <span>Nova Reserva</span>
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Hóspede</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Acomodação</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Check-in</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Check-out</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">JS</div>
                                            <div>
                                                <p className="font-medium text-slate-800">João Silva</p>
                                                <p className="text-xs text-slate-500">#12345</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">101 - Standard</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">20/05/2024</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">25/05/2024</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">Confirmada</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-teal p-1"><span className="material-symbols-outlined">visibility</span></button>
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">MO</div>
                                            <div>
                                                <p className="font-medium text-slate-800">Maria Oliveira</p>
                                                <p className="text-xs text-slate-500">#12346</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">105 - Duplo</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">22/05/2024</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">24/05/2024</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">Check-in</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-teal p-1"><span className="material-symbols-outlined">visibility</span></button>
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">CP</div>
                                            <div>
                                                <p className="font-medium text-slate-800">Carlos Pereira</p>
                                                <p className="text-xs text-slate-500">#12347</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">110 - Duplo</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">25/05/2024</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">28/05/2024</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">Pendente</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-teal p-1"><span className="material-symbols-outlined">visibility</span></button>
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center bg-slate-50">
                            <span className="text-sm text-slate-500">Mostrando 3 de 45 reservas</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-400 text-sm hover:bg-slate-100" disabled>Anterior</button>
                                <button className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-600 text-sm hover:bg-slate-100">Próximo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
