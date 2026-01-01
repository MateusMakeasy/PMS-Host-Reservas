import Sidebar from '../../components/Sidebar';

export default function DayUsePage() {
    return (
        <div className="font-display bg-[#F3F4F6] text-slate-900 h-screen flex">
            {/* Sidebar with specific styles for Day Use screen */}
            <Sidebar />

            <main className="ml-64 flex-1 p-8 bg-[#F3F4F6]">
                <div className="max-w-7xl mx-auto">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-800">Gerenciamento de Day Use</h1>
                        <button className="bg-[#00BCD4] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4] focus:ring-offset-slate-100 flex items-center">
                            <span className="material-symbols-outlined mr-2">add</span>
                            Nova Reserva Day Use
                        </button>
                    </header>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-xl font-semibold text-slate-800">Reservas Ativas Hoje</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-600">
                                <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-3" scope="col">Hóspede</th>
                                        <th className="px-6 py-3" scope="col">Período</th>
                                        <th className="px-6 py-3" scope="col">Instalações</th>
                                        <th className="px-6 py-3" scope="col">Status</th>
                                        <th className="px-6 py-3 text-right" scope="col">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Ana Clara Souza</td>
                                        <td className="px-6 py-4">09:00 - 18:00</td>
                                        <td className="px-6 py-4">Piscina, Sauna</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Check-in
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Roberto Martins</td>
                                        <td className="px-6 py-4">10:00 - 17:00</td>
                                        <td className="px-6 py-4">Piscina</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Check-in
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Família Oliveira</td>
                                        <td className="px-6 py-4">08:00 - 19:00</td>
                                        <td className="px-6 py-4">Piscina, Quadra, Restaurante</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Pendente
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a className="font-medium text-[#00BCD4] hover:underline" href="#">Ver Detalhes</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Juliana Costa</td>
                                        <td className="px-6 py-4">11:00 - 16:00</td>
                                        <td className="px-6 py-4">Piscina</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
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
    );
}
