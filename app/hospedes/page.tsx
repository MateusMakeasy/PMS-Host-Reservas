import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function HospedesPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Gerenciamento de Hóspedes" breadcrumb="Hóspedes" />

                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                placeholder="Buscar hóspede por nome, email..."
                                className="pl-10 pr-4 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal w-80 shadow-sm"
                            />
                        </div>

                        <button className="btn-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">person_add</span>
                            <span>Novo Hóspede</span>
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Hóspede</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contato</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Origem</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Última Estadia</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIiFx8MIztgpUBarlCv_R_XQL1BGhQdmxMu8Sx-iwFen29Px-i76oiAJrdkHUeho4c7ViFYbNS4m0Tp4XPr_yzR5mwjoP2qUMEh50cwrA2OsWzP71qGrSKX3qXgvxSi2R-fN9YICUcjJO0DspWhtl0WztJxpNTOY4Mms5XmStV_LpVw21h9mVQwKkHnldvzKCKsRCktpe2096tAnZzWcgqt26tnEuxDwfr6JAaEGNhg49eEfCoq24vc6rwsyC8GodbHY0N5x1Uh0A" alt="João" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800">João da Silva</p>
                                                <p className="text-xs text-slate-500">Cadastrado em 10/01/2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-slate-600">joao.silva@email.com</p>
                                        <p className="text-xs text-slate-500">(11) 98765-4321</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Booking.com</td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-600">20/05/2023</span>
                                        <span className="block text-xs text-green-600 font-medium">Concluída</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-teal p-1"><span className="material-symbols-outlined">visibility</span></button>
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE9wdWaIwLxI4s3i-L2RUpe2xV9remeauQ69KNL_wZcYkKlSTpt4uyFfAgu6JptlyKx0E4cENqPvnZX8kU_AGej9uhLTxQ9K0qzEH12ow4e6s0ElnjE32qzhWc2nhP41peL6ApDQlQPrkE80oGjtbnqE5OPCXiERjbKx3TGkhf594RMYL29LjnjmKd5tDGqcHJRlXz47TKEosnf4O0oawU3GYOL1z-lXQUst4shnthCjLpCmkbiHrN0iUb6v9Ky6YSOSWf5B1SJD4" alt="Maria" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800">Maria Oliveira</p>
                                                <p className="text-xs text-slate-500">Cadastrado em 15/03/2023</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-slate-600">maria.oliveira@email.com</p>
                                        <p className="text-xs text-slate-500">(21) 99876-5432</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Direta (Whatsapp)</td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-600">03/02/2023</span>
                                        <span className="block text-xs text-green-600 font-medium">Concluída</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-teal p-1"><span className="material-symbols-outlined">visibility</span></button>
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center bg-slate-50">
                            <span className="text-sm text-slate-500">Mostrando 2 de 156 hóspedes</span>
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
