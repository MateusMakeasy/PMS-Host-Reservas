import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MeuCaixaPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Meu Caixa" breadcrumb="Financeiro" />

                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="card p-6 border-l-4 border-brand-teal">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Saldo Atual</p>
                                    <p className="text-3xl font-bold text-slate-800 mt-2">R$ 1.250,75</p>
                                </div>
                                <div className="p-3 bg-teal-50 rounded-full text-brand-teal">
                                    <span className="material-symbols-outlined">account_balance_wallet</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-4">Atualizado agora</p>
                        </div>

                        <div className="card p-6 border-l-4 border-status-green">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Entradas (Hoje)</p>
                                    <p className="text-3xl font-bold text-slate-800 mt-2">R$ 875,00</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-full text-status-green">
                                    <span className="material-symbols-outlined">arrow_downward</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-4">20 de Maio</p>
                        </div>

                        <div className="card p-6 border-l-4 border-status-red">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Saídas (Hoje)</p>
                                    <p className="text-3xl font-bold text-slate-800 mt-2">R$ 150,00</p>
                                </div>
                                <div className="p-3 bg-red-50 rounded-full text-status-red">
                                    <span className="material-symbols-outlined">arrow_upward</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-4">20 de Maio</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                placeholder="Buscar lançamento..."
                                className="pl-10 pr-4 py-2 border-slate-200 rounded-md text-sm focus:ring-brand-teal focus:border-brand-teal w-80 shadow-sm"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button className="btn-secondary bg-status-red hover:bg-red-600 flex items-center gap-2">
                                <span className="material-symbols-outlined">remove</span>
                                <span>Retirada</span>
                            </button>
                            <button className="btn-primary flex items-center gap-2">
                                <span className="material-symbols-outlined">add</span>
                                <span>Lançamento</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-200">
                            <h3 className="font-bold text-slate-700">Movimentações Recentes</h3>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Descrição</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Data</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-800">Check-in Quarto 5 - Sophie G.</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Entrada</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">20/05/2024 14:30</td>
                                    <td className="px-6 py-4 text-right font-medium text-green-600">+ R$ 450,00</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-800">Pagamento Fornecedor Limpeza</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Saída</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">20/05/2024 11:15</td>
                                    <td className="px-6 py-4 text-right font-medium text-red-600">- R$ 150,00</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-slate-800">Consumo Frigobar - Quarto 2</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Entrada</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">20/05/2024 10:05</td>
                                    <td className="px-6 py-4 text-right font-medium text-green-600">+ R$ 25,00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="p-4 border-t border-slate-200 text-center bg-slate-50">
                            <a className="text-sm font-medium text-brand-blue hover:underline" href="#">Ver todas as transações</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
