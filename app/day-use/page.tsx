import React from 'react';

export default function DayUsePage() {
    return (
        <div className="font-display bg-slate-100 text-slate-900 bg-[#F3F4F6] dark:bg-slate-900 min-h-screen">
            <div className="flex h-screen">
                <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col fixed h-full">
                    <div className="px-6 py-5">
                        <div className="flex items-center space-x-3 text-2xl font-bold text-yellow-400">
                            <span className="material-symbols-outlined text-4xl">cottage</span>
                            <span>Hospedin</span>
                        </div>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-2">
                        <span className="px-2 text-xs font-bold tracking-wider uppercase text-slate-500">Menu Principal</span>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="/inicio">
                                    <span className="material-symbols-outlined mr-3">home</span>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="#">
                                    <span className="material-symbols-outlined mr-3">leaderboard</span>
                                    <span>Indicadores</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="/mapa">
                                    <span className="material-symbols-outlined mr-3">map</span>
                                    <span>Mapa</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="/reservas">
                                    <span className="material-symbols-outlined mr-3">calendar_month</span>
                                    <span>Reservas</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="/hospedes">
                                    <span className="material-symbols-outlined mr-3">groups</span>
                                    <span>Hóspedes</span>
                                </a>
                            </li>
                            <li className="relative">
                                <span className="absolute left-0 top-0 h-full w-1 bg-[#00BCD4]"></span>
                                <a className="flex items-center px-2 py-2.5 rounded-md bg-slate-700/50 text-white font-semibold" href="/day-use">
                                    <span className="material-symbols-outlined mr-3 text-[#00BCD4]">wb_sunny</span>
                                    <span className="text-[#00BCD4]">Day Use</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="/transacoes">
                                    <span className="material-symbols-outlined mr-3">credit_card</span>
                                    <span>Transações</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="/meu-caixa">
                                    <span className="material-symbols-outlined mr-3">payments</span>
                                    <span>Meu Caixa</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="px-4 py-4">
                        <a className="flex items-center px-2 py-2.5 rounded-md hover:bg-slate-700 hover:text-white" href="#">
                            <span className="material-symbols-outlined mr-3">settings</span>
                            <span>Configurações</span>
                        </a>
                    </div>
                </aside>
                <main className="ml-64 flex-1 p-8 bg-slate-100 dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto">
                        <header className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Gerenciamento de Day Use</h1>
                            <button className="bg-[#00BCD4] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800 flex items-center">
                                <span className="material-symbols-outlined mr-2">add</span>
                                Nova Reserva Day Use
                            </button>
                        </header>
                        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Reservas Ativas Hoje</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-slate-600 dark:text-slate-400">
                                    <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-800">
                                        <tr>
                                            <th className="px-6 py-3" scope="col">Hóspede</th>
                                            <th className="px-6 py-3" scope="col">Período</th>
                                            <th className="px-6 py-3" scope="col">Instalações</th>
                                            <th className="px-6 py-3" scope="col">Status</th>
                                            <th className="px-6 py-3 text-right" scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Ana Clara Souza</td>
                                            <td className="px-6 py-4">09:00 - 18:00</td>
                                            <td className="px-6 py-4">Piscina, Sauna</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                    Check-in
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Roberto Martins</td>
                                            <td className="px-6 py-4">10:00 - 17:00</td>
                                            <td className="px-6 py-4">Piscina</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                    Check-in
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Família Oliveira</td>
                                            <td className="px-6 py-4">08:00 - 19:00</td>
                                            <td className="px-6 py-4">Piscina, Quadra, Restaurante</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                                    Pendente
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Juliana Costa</td>
                                            <td className="px-6 py-4">11:00 - 16:00</td>
                                            <td className="px-6 py-4">Piscina</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                                                    Check-out
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
