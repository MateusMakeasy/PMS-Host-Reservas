import React from 'react';

export default function MeuCaixaPage() {
    return (
        <div className="font-display bg-slate-100 text-slate-900">
            <div className="flex h-screen bg-slate-100">
                <aside className="w-64 bg-[#2C3E50] text-white flex flex-col z-10">
                    <div className="h-16 flex items-center justify-center border-b border-white/10">
                        <div className="flex items-center space-x-2">
                            <span className="material-symbols-outlined text-3xl text-amber-400">home</span>
                            <span className="text-2xl font-bold">Hospedin</span>
                        </div>
                    </div>
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        <p className="px-4 text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Menu Principal</p>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/inicio"><span className="material-symbols-outlined">home</span> Home</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="#"><span className="material-symbols-outlined">leaderboard</span> Indicadores</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/mapa"><span className="material-symbols-outlined">map</span> Mapa</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/reservas"><span className="material-symbols-outlined">calendar_month</span> Reservas</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/hospedes"><span className="material-symbols-outlined">group</span> Hóspedes</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/day-use"><span className="material-symbols-outlined">wb_sunny</span> Day Use</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/transacoes"><span className="material-symbols-outlined">receipt_long</span> Transações</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md bg-white/10 font-medium text-white border-l-4 border-cyan-400" href="/meu-caixa"><span className="material-symbols-outlined">payments</span> Meu Caixa</a>
                        <a className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="#"><span className="material-symbols-outlined">settings</span> Configurações</a>
                    </nav>
                </aside>
                <main className="flex-1 overflow-y-auto bg-white">
                    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200">
                        <div className="flex justify-between items-center p-4">
                            <h1 className="text-2xl font-bold text-slate-800">Meu Caixa</h1>
                            <div className="flex items-center space-x-4">
                                <button className="p-2 rounded-full hover:bg-slate-200">
                                    <span className="material-symbols-outlined text-slate-500">notifications</span>
                                </button>
                                <div className="flex items-center space-x-2">
                                    <img alt="User avatar" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcEvhyyEIbaaWNObHE2qDeOgMVS9ZF4iIWdJstic6eNkvJN2ETKtB2Tc35-yjJYDDWPwCa_ImBcKEnf5ixWDbUW9pp58jD-M7sUkh8P2xkVcqzC91niMWOtDtkk2futHbFcTxPg1vDE-u8jujCMBE_ciynBkIuNyiLv45Q8Mf1TlZQZd9W7zKij9E_dOo0UnnD73FG86uT5UX0XhS-dQ1p3vH-c8bbuYYCuH3DYEfpwnqKd-W3UXGwJ64x2RKwljOwLVnr7HixXeE" />
                                    <div className="hidden sm:block">
                                        <p className="font-semibold text-sm text-slate-800">Minha Pousada</p>
                                        <p className="text-xs text-slate-500">Admin</p>
                                    </div>
                                    <button>
                                        <span className="material-symbols-outlined text-slate-500">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-slate-500">Saldo Atual em Caixa</h3>
                                    <span className="material-symbols-outlined text-green-500">account_balance_wallet</span>
                                </div>
                                <p className="text-3xl font-bold mt-2 text-slate-800">R$ 1.250,75</p>
                                <p className="text-xs text-slate-500 mt-1">Atualizado agora</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-slate-500">Entradas do Dia</h3>
                                    <span className="material-symbols-outlined text-blue-500">arrow_downward</span>
                                </div>
                                <p className="text-3xl font-bold mt-2 text-slate-800">R$ 875,00</p>
                                <p className="text-xs text-slate-500 mt-1">Hoje, 20 de Maio</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-slate-500">Saídas do Dia</h3>
                                    <span className="material-symbols-outlined text-red-500">arrow_upward</span>
                                </div>
                                <p className="text-3xl font-bold mt-2 text-slate-800">R$ 150,00</p>
                                <p className="text-xs text-slate-500 mt-1">Hoje, 20 de Maio</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="relative w-full sm:w-auto">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input className="pl-10 pr-4 py-2 w-full sm:w-64 bg-white border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-slate-700" placeholder="Buscar transação..." type="text" />
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-700 bg-teal-100 border border-transparent rounded-md hover:bg-teal-200 transition">
                                    <span className="material-symbols-outlined !text-base">add</span>
                                    Lançamento
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition">
                                    <span className="material-symbols-outlined !text-base">remove</span>
                                    Retirada
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                            <div className="p-4 border-b border-slate-200">
                                <h3 className="text-lg font-semibold text-slate-800">Transações Recentes</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-3" scope="col">Descrição</th>
                                            <th className="px-6 py-3" scope="col">Tipo</th>
                                            <th className="px-6 py-3" scope="col">Data</th>
                                            <th className="px-6 py-3 text-right" scope="col">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">Check-in Quarto 5 - Sophie G.</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Entrada</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-slate-600">20/05/2024 14:30</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-green-600">+ R$ 450,00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">Pagamento Fornecedor Limpeza</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Saída</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-slate-600">20/05/2024 11:15</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-red-600">- R$ 150,00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">Consumo Frigobar - Quarto 2</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Entrada</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-slate-600">20/05/2024 10:05</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-green-600">+ R$ 25,00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">Check-out Quarto 7 - Juliana Vieira</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Entrada</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-slate-600">19/05/2024 12:00</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-green-600">+ R$ 400,00</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">Sangria de Caixa</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Saída</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-slate-600">18/05/2024 18:00</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-red-600">- R$ 500,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 border-t border-slate-200 text-center">
                                <a className="text-sm font-medium text-teal-600 hover:underline" href="#">Ver todas as transações</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
