import Sidebar from '../../components/Sidebar';

export default function InicioPage() {
    return (
        <div className="font-display bg-[#f1f5f9] min-h-screen flex">
            <Sidebar />
            <main className="flex-1 flex flex-col ml-64 bg-[#f1f5f9]">
                <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200 sticky top-0 z-10">
                    <div className="flex items-center gap-4 text-slate-500">
                        <button><span className="material-symbols-outlined">menu</span></button>
                        <button><span className="material-symbols-outlined">apps</span></button>
                        <button><span className="material-symbols-outlined">link</span></button>
                        <button><span className="material-symbols-outlined">expand_more</span></button>
                        <button><span className="material-symbols-outlined">cloud</span></button>
                        <button><span className="material-symbols-outlined">search</span></button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
                                <span className="text-slate-500 font-bold">MP</span>
                            </div>
                            <span className="text-slate-700">Minha Pousada</span>
                            <span className="material-symbols-outlined text-slate-500">expand_more</span>
                        </div>
                    </div>
                </header>
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        <button className="px-3 py-1 text-sm rounded-md bg-slate-200 text-slate-800">todos <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-slate-300">10</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-emerald-100 text-emerald-800">disponível <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-emerald-200">2</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-800">em limpeza <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-blue-200">1</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-slate-500 text-white">em pedidos <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-slate-400">5</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-slate-600 text-white">hospedados <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-slate-500">5</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white">extra hóspede <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-blue-400">1</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-yellow-400 text-yellow-900">em mau uso <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-yellow-300">0</span></button>
                        <button className="px-3 py-1 text-sm rounded-md bg-purple-500 text-white">vendidos <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-purple-400">2</span></button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-blue-600 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 1</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="text-slate-700">
                                    <p className="text-sm">A: Caroline Silva</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                        <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                        <span>01/03/2019 - 05/03/2019</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                        Reservar
                                    </button>
                                    <button className="px-2 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-red-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 2</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="text-slate-700">
                                    <p className="text-sm">A: Jaelson de Abreu</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                        <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                        <span>01/03/2019 - 05/03/2019</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <span className="material-symbols-outlined text-lg text-emerald-500">circle</span>
                                        <span className="material-symbols-outlined text-lg">list_alt</span>
                                        <span className="material-symbols-outlined text-lg">local_parking</span>
                                        <span className="material-symbols-outlined text-lg">person_add</span>
                                    </div>
                                    <button className="px-2 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-teal-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 3</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="text-slate-700">
                                    <p className="text-sm">A: JAEhandaC aurline</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                        <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                        <span>21/03/2019 - 05/03/2019</span>
                                    </div>
                                </div>
                                <button className="flex items-center text-sm w-full justify-center px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                    <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                    Reservar
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-red-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 4</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="text-slate-700">
                                    <p className="text-sm">A: JAEhandaC aurline</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                        <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                        <span>01/03/2019 - 05/03/2019</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <span className="material-symbols-outlined text-lg text-red-500">favorite</span>
                                        <span className="material-symbols-outlined text-lg">list_alt</span>
                                        <span className="material-symbols-outlined text-lg">local_parking</span>
                                        <span className="material-symbols-outlined text-lg">person_add</span>
                                    </div>
                                    <button className="px-2 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-slate-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 5</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="text-slate-700">
                                    <p className="text-sm">A: Jalelson de Abreu</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                        <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                        <span>01/03/2019 - 05/03/2019</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                        Reservar
                                    </button>
                                    <button className="px-2 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-teal-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 6</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4 min-h-[128px] flex flex-col justify-end">
                                <button className="flex items-center text-sm w-full justify-center px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                    <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                    Reservar
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-red-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 7</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="text-slate-700">
                                    <p className="text-sm">A: Virdhul Famarca de A...</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                        <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                                        <span>01/03/2019 - 05/03/2019</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <span className="material-symbols-outlined text-lg text-red-500">favorite</span>
                                        <span className="material-symbols-outlined text-lg">list_alt</span>
                                        <span className="material-symbols-outlined text-lg">local_parking</span>
                                        <span className="material-symbols-outlined text-lg">person_add</span>
                                    </div>
                                    <button className="px-2 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-base">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-teal-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 8</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4 min-h-[128px] flex flex-col justify-end">
                                <button className="flex items-center text-sm w-full justify-center px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                    <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                    Reservar
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-slate-700 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 9</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4 min-h-[128px] flex flex-col justify-end">
                                <button className="flex items-center text-sm w-full justify-center px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                    <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                    Reservar
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-teal-500 p-3 flex justify-between items-center">
                                <h3 className="font-bold text-white">QUARTO 10</h3>
                                <span className="material-symbols-outlined text-white">remove</span>
                            </div>
                            <div className="p-4 space-y-4 min-h-[128px] flex flex-col justify-end">
                                <button className="flex items-center text-sm w-full justify-center px-3 py-1.5 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100">
                                    <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
                                    Reservar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
