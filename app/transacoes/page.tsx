import React from 'react';

export default function TransacoesPage() {
    return (
        <div className="font-display bg-background-light flex h-auto min-h-screen w-full flex-row">
            <aside className="w-64 flex-shrink-0 bg-[#232a3b] text-white flex flex-col">
                <div className="p-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 400, 'FILL' 1" }}>cottage</span>
                    <span className="text-2xl font-bold">Hospedin</span>
                </div>
                <div className="flex-grow px-4">
                    <p className="text-xs font-bold uppercase text-gray-400 mb-4 ml-4">Menu Principal</p>
                    <nav className="flex flex-col gap-1">
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="/inicio">
                            <span className="material-symbols-outlined">home</span>
                            <p className="text-sm font-medium">Home</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined">bar_chart</span>
                            <p className="text-sm font-medium">Indicadores</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="/mapa">
                            <span className="material-symbols-outlined">map</span>
                            <p className="text-sm font-medium">Mapa</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="/reservas">
                            <span className="material-symbols-outlined">calendar_month</span>
                            <p className="text-sm font-medium">Reservas</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="/hospedes">
                            <span className="material-symbols-outlined">group</span>
                            <p className="text-sm font-medium">Hóspedes</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="/day-use">
                            <span className="material-symbols-outlined">wb_sunny</span>
                            <p className="text-sm font-medium">Day Use</p>
                        </a>
                        <a className="active flex items-center gap-3 pl-3.5 pr-4 py-2.5 rounded-lg bg-[#4f587a] text-white transition-colors border-l-2 border-[#137fec]" href="/transacoes">
                            <span className="material-symbols-outlined">receipt_long</span>
                            <p className="text-sm font-medium">Transações</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="/meu-caixa">
                            <span className="material-symbols-outlined">point_of_sale</span>
                            <p className="text-sm font-medium">Meu Caixa</p>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-[#3a415a] hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <p className="text-sm font-medium">Configurações</p>
                        </a>
                    </nav>
                </div>
                <div className="p-4">
                    <div className="border-t border-gray-700 pt-4 flex items-center gap-3">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Hotel Admin profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5GI7JWJ5n1F53OvuZ3kLn7WoqgPldW5EPH8elxB4AE56GH3BoZvYPQiKrKsKYcwPAfFEU7Zib3v5hsfPC6qAP7IYX0_pYB8oEW4nuyNFmh27SPXPlm5KxTNzSvEe1TtpBC3nPuZrJjEJeLj-LIjN5xAqq8y8OdAejiUdK_qSQCYiap3w2b5CEn_LF0PrpM6jbKmS6KnSXfcWXkP5OSxgFMhyyEk68L8FGUlgYLmEcrdDicIBKLoLHZ_YvEJdN9wMt5WA68R-Mrwg")' }}></div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-sm font-medium leading-normal">Hotel Admin</h1>
                            <p className="text-gray-400 text-xs font-normal leading-normal">admin@hotel.com</p>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="flex-1 flex flex-col p-8 bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
                        <p className="text-gray-800 text-4xl font-black leading-tight tracking-[-0.033em]">Gerenciamento de Transações</p>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-[#137fec] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#137fec]/90">
                            <span className="material-symbols-outlined text-base">add_circle</span>
                            <span className="truncate">Nova Transação</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg mb-6 border">
                        <div className="relative flex-grow max-w-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="material-symbols-outlined text-gray-400">search</span>
                            </div>
                            <input className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-[#137fec] focus:border-[#137fec]" placeholder="Pesquisar por descrição ou reserva..." type="text" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <select className="appearance-none w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-[#137fec] focus:border-[#137fec]">
                                    <option>Todos os Tipos</option>
                                    <option>Receita</option>
                                    <option>Despesa</option>
                                    <option>Cancelado</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                            <div className="relative">
                                <input className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-[#137fec] focus:border-[#137fec]" type="date" />
                            </div>
                        </div>
                    </div>
                    <div className="px-0 py-3 @container">
                        <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <table className="flex-1">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Data</th>
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Descrição</th>
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Tipo</th>
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Valor</th>
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Reserva Associada</th>
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Status</th>
                                        <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium leading-normal">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200">
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">2024-07-22</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-800 text-sm font-normal leading-normal">Pagamento da Estadia</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Receita</td>
                                        <td className="h-[72px] px-4 py-2 text-green-500 text-sm font-medium leading-normal">R$ 1.250,00</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Reserva #1024</td>
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-700">Pago</span>
                                        </td>
                                        <td className="h-[72px] px-4 py-2">
                                            <button className="p-2 text-gray-500 hover:text-[#137fec]"><span className="material-symbols-outlined">edit</span></button>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">2024-07-21</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-800 text-sm font-normal leading-normal">Compra de Suprimentos</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Despesa</td>
                                        <td className="h-[72px] px-4 py-2 text-red-500 text-sm font-medium leading-normal">- R$ 300,00</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">N/A</td>
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-700">Pago</span>
                                        </td>
                                        <td className="h-[72px] px-4 py-2">
                                            <button className="p-2 text-gray-500 hover:text-[#137fec]"><span className="material-symbols-outlined">edit</span></button>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">2024-07-21</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-800 text-sm font-normal leading-normal">Serviço de Quarto</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Receita</td>
                                        <td className="h-[72px] px-4 py-2 text-green-500 text-sm font-medium leading-normal">R$ 85,50</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Reserva #1023</td>
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">Pendente</span>
                                        </td>
                                        <td className="h-[72px] px-4 py-2">
                                            <button className="p-2 text-gray-500 hover:text-[#137fec]"><span className="material-symbols-outlined">edit</span></button>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">2024-07-20</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-800 text-sm font-normal leading-normal">Taxa de Serviço</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Despesa</td>
                                        <td className="h-[72px] px-4 py-2 text-red-500 text-sm font-medium leading-normal">- R$ 150,00</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">N/A</td>
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-700">Pago</span>
                                        </td>
                                        <td className="h-[72px] px-4 py-2">
                                            <button className="p-2 text-gray-500 hover:text-[#137fec]"><span className="material-symbols-outlined">edit</span></button>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">2024-07-19</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-800 text-sm font-normal leading-normal">Pagamento Cancelado</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Cancelado</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">R$ 500,00</td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 text-sm font-normal leading-normal">Reserva #1021</td>
                                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600">Cancelado</span>
                                        </td>
                                        <td className="h-[72px] px-4 py-2">
                                            <button className="p-2 text-gray-500 hover:text-[#137fec]"><span className="material-symbols-outlined">edit</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-4 mt-4">
                        <a className="flex size-10 items-center justify-center text-gray-500 hover:text-[#137fec]" href="#">
                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                        </a>
                        <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#137fec]" href="#">1</a>
                        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 rounded-full hover:bg-gray-200" href="#">2</a>
                        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 rounded-full hover:bg-gray-200" href="#">3</a>
                        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 rounded-full hover:bg-gray-200" href="#">4</a>
                        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-600 rounded-full hover:bg-gray-200" href="#">5</a>
                        <a className="flex size-10 items-center justify-center text-gray-500 hover:text-[#137fec]" href="#">
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
