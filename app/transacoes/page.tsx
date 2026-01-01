import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function TransacoesPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Gerenciamento de Transações" breadcrumb="Transações" />

                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    type="text"
                                    placeholder="Buscar transação..."
                                    className="pl-10 pr-4 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal w-80 shadow-sm"
                                />
                            </div>
                            <select className="pl-3 pr-10 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal shadow-sm bg-white text-slate-600">
                                <option>Todas as Categorias</option>
                                <option>Receitas</option>
                                <option>Despesas</option>
                            </select>
                            <input
                                type="date"
                                className="pl-3 pr-3 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal shadow-sm bg-white text-slate-600"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button className="btn-secondary flex items-center gap-2 bg-status-red hover:bg-red-600">
                                <span className="material-symbols-outlined text-xl">remove_circle</span>
                                <span>Despesa</span>
                            </button>
                            <button className="btn-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">add_circle</span>
                                <span>Receita</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Data</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Descrição</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Categoria</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Valor</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-slate-600">22/07/2024</td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-slate-800">Pagamento de Estadia - Quarto 101</p>
                                        <p className="text-xs text-slate-500">Ref: Reserva #1024</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Hospedagem
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-status-green">R$ 1.250,00</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px] text-green-500">check_circle</span> Concluído
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-slate-600">21/07/2024</td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-slate-800">Compra de Material de Limpeza</p>
                                        <p className="text-xs text-slate-500">Fornecedor: LimpaTudo Ltda</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Despesa Operacional
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-status-red">- R$ 300,00</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px] text-green-500">check_circle</span> Concluído
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-slate-600">21/07/2024</td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-slate-800">Serviço de Quarto - Quarto 105</p>
                                        <p className="text-xs text-slate-500">Ref: Reserva #1023</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            A & B
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-status-green">R$ 85,50</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px] text-status-yellow">schedule</span> Pendente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1"><span className="material-symbols-outlined">edit</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="px-6 py-4 border-t border-slate-200 flex justify-between items-center bg-slate-50">
                            <span className="text-sm text-slate-500">Mostrando 3 de 450 transações</span>
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
