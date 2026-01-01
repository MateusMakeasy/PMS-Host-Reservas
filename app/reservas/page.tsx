import Sidebar from '../../components/Sidebar';

export default function ReservasPage() {
    return (
        <div className="flex bg-gray-100 text-gray-800 min-h-screen font-display">
            <Sidebar />
            <main className="flex-1 p-8 ml-64 overflow-y-auto bg-white min-h-screen">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Gerenciamento de Reservas</h2>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            <input
                                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-[#3498DB] focus:border-[#3498DB]"
                                placeholder="Buscar hóspede ou quarto..."
                                type="text"
                            />
                        </div>
                        <button className="bg-[#3498DB] text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-md hover:bg-opacity-90 transition-colors">
                            <span className="material-symbols-outlined mr-2">add</span>
                            Nova Reserva
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b-2 border-gray-200">
                                <tr>
                                    <th className="p-4 font-medium text-sm text-gray-500 uppercase tracking-wider">Hóspede</th>
                                    <th className="p-4 font-medium text-sm text-gray-500 uppercase tracking-wider">Quarto</th>
                                    <th className="p-4 font-medium text-sm text-gray-500 uppercase tracking-wider">Check-in</th>
                                    <th className="p-4 font-medium text-sm text-gray-500 uppercase tracking-wider">Check-out</th>
                                    <th className="p-4 font-medium text-sm text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="p-4 font-medium text-sm text-gray-500 uppercase tracking-wider">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-4 text-gray-900">João Silva</td>
                                    <td className="p-4 text-gray-500">101</td>
                                    <td className="p-4 text-gray-500">2024-08-01</td>
                                    <td className="p-4 text-gray-500">2024-08-05</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Confirmada</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="text-gray-500 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900">Maria Oliveira</td>
                                    <td className="p-4 text-gray-500">205</td>
                                    <td className="p-4 text-gray-500">2024-08-03</td>
                                    <td className="p-4 text-gray-500">2024-08-07</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Checked-in</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="text-gray-500 hover:text-red-500 transition-colors"><span class="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900">Carlos Pereira</td>
                                    <td className="p-4 text-gray-500">302</td>
                                    <td className="p-4 text-gray-500">2024-08-04</td>
                                    <td className="p-4 text-gray-500">2024-08-10</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pendente</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="text-gray-500 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900">Ana Souza</td>
                                    <td className="p-4 text-gray-500">103</td>
                                    <td className="p-4 text-gray-500">2024-07-28</td>
                                    <td className="p-4 text-gray-500">2024-08-02</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">Checked-out</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="text-gray-500 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900">Pedro Costa</td>
                                    <td className="p-4 text-gray-500">401</td>
                                    <td className="p-4 text-gray-500">2024-08-15</td>
                                    <td className="p-4 text-gray-500">2024-08-20</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Cancelada</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex space-x-2">
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
                                            <button className="text-gray-500 hover:text-gray-700 transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="text-gray-500 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 flex justify-between items-center border-t border-gray-200 text-sm text-gray-500">
                        <span>Mostrando 1-5 de 50 resultados</span>
                        <div className="flex items-center space-x-2">
                            <button className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50" disabled><span className="material-symbols-outlined text-base">chevron_left</span></button>
                            <button className="px-3 py-1 rounded-lg bg-[#3498DB] text-white">1</button>
                            <button className="px-3 py-1 rounded-lg hover:bg-gray-100">2</button>
                            <button className="px-3 py-1 rounded-lg hover:bg-gray-100">3</button>
                            <span>...</span>
                            <button className="px-3 py-1 rounded-lg hover:bg-gray-100">10</button>
                            <button className="p-2 rounded-lg hover:bg-gray-100"><span className="material-symbols-outlined text-base">chevron_right</span></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
