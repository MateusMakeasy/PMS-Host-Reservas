import Sidebar from '../../components/Sidebar';

export default function TransacoesPage() {
    return (
        <div className="font-display bg-[#f6f7f8] min-h-screen flex flex-row">
            {/* Import Manrope font locally for this page if not available globally */}
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

            <Sidebar />

            <main className="flex-1 flex flex-col p-8 bg-white ml-64 font-['Manrope']">
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
