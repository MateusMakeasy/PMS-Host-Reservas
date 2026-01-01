import Sidebar from '../../components/Sidebar';

export default function HomePage() {
    return (
        <div className="bg-[#f1f5f9] font-display flex min-h-screen">
            <Sidebar />
            <main className="flex-1 flex flex-col ml-64">
                <header className="h-20 bg-white flex items-center justify-between px-8 border-b border-slate-200 shadow-sm sticky top-0 z-10 w-full">
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="material-symbols-outlined">menu</span>
                        <span className="material-symbols-outlined">fullscreen</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <img alt="Avatar do usuário" className="h-10 w-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFOGZ1qh2ttMxbHYb4TUIiUCRoxcNDV8aF94SIB7dTKncUXf2_Me1w3knrud_pkSXnu91edOCnCnb3aFcNlFaMU-uM_RcQ2hHG50GcYkhIbayyoRtgCqYJFcvauwp3_LXUI38sM_BO9P97ShANOXr7254TNdVSl1bcIcIGutZ4PDZtL8kWZ7mhJv_kvyQkfRdaYqloJuyZscuoCzOhtV0JaM9KafYChpZG9-etW4k2nxEoEFmxRuSI6leyV4-670Vfj2x89wkKGV0" />
                            <div>
                                <p className="font-medium text-slate-700">Minha Pousada</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-500">expand_more</span>
                        </div>
                    </div>
                </header>
                <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
                    <div className="mb-6">
                        <p className="text-sm text-gray-500">HOME / INDICADORES</p>
                        <h3 className="text-2xl font-semibold text-gray-800 mt-1">PRINCIPAIS INDICADORES (Hoje)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-teal-500">30.0 %</p>
                                <p className="text-sm text-slate-500">Taxa de ocupação</p>
                            </div>
                            <div className="ml-auto bg-teal-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-teal-500 text-3xl">layers</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-sky-500">R$ 189,58</p>
                                <p className="text-sm text-slate-500">RevPAR</p>
                            </div>
                            <div className="ml-auto bg-sky-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-sky-500 text-3xl">apps</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-green-500">R$ 2.865,00</p>
                                <p className="text-sm text-slate-500">Receita</p>
                            </div>
                            <div className="ml-auto bg-green-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-green-500 text-3xl">account_balance_wallet</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-cyan-500">3</p>
                                <p className="text-sm text-slate-500">Novas reservas</p>
                            </div>
                            <div className="ml-auto bg-cyan-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-cyan-500 text-3xl">add_shopping_cart</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-blue-500">7</p>
                                <p className="text-sm text-slate-500">Nº de hóspedes</p>
                            </div>
                            <div className="ml-auto bg-blue-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-blue-500 text-3xl">groups</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-orange-500">R$ 631,94</p>
                                <p className="text-sm text-slate-500">Diária média</p>
                            </div>
                            <div className="ml-auto bg-orange-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-orange-500 text-3xl">trending_up</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-red-500">R$ 450,00</p>
                                <p className="text-sm text-slate-500">Despesas</p>
                            </div>
                            <div className="ml-auto bg-red-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-red-500 text-3xl">request_quote</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                            <div>
                                <p className="text-3xl font-bold text-purple-500">0</p>
                                <p className="text-sm text-slate-500">Reservas canceladas</p>
                            </div>
                            <div className="ml-auto bg-purple-100 p-3 rounded-md">
                                <span className="material-symbols-outlined text-purple-500 text-3xl">event_busy</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">PRINCIPAIS GRÁFICOS</h4>
                                <p className="text-sm text-gray-500">RESERVAS (27/02 - 06/03)</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="w-3 h-3 bg-sky-400 rounded-sm"></span>
                                    Novas
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="w-3 h-3 bg-red-400 rounded-sm"></span>
                                    Canceladas
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="w-3 h-3 bg-orange-400 rounded-sm"></span>
                                    No show
                                </div>
                            </div>
                        </div>
                        <div className="h-80 flex items-end justify-between px-4 pb-4 border-l border-b border-slate-200 relative">
                            <div className="absolute -left-8 top-0 bottom-4 flex flex-col justify-between text-xs text-slate-400">
                                <span>20</span>
                                <span>15</span>
                                <span>10</span>
                                <span>5</span>
                                <span>0</span>
                            </div>
                            <div className="w-full h-full flex justify-around items-end gap-2">
                                <div className="flex items-end gap-1 h-full w-full justify-center">
                                    <div className="bg-sky-400 w-4 rounded-t-sm" style={{ height: "75%" }}></div>
                                    <div className="bg-red-400 w-4 rounded-t-sm" style={{ height: "15%" }}></div>
                                    <div className="bg-orange-400 w-4 rounded-t-sm" style={{ height: "55%" }}></div>
                                </div>
                                <div className="flex items-end gap-1 h-full w-full justify-center">
                                    <div className="bg-sky-400 w-4 rounded-t-sm" style={{ height: "25%" }}></div>
                                    <div className="bg-red-400 w-4 rounded-t-sm" style={{ height: "25%" }}></div>
                                </div>
                                <div className="flex items-end gap-1 h-full w-full justify-center">
                                    <div className="bg-sky-400 w-4 rounded-t-sm" style={{ height: "25%" }}></div>
                                    <div className="bg-red-400 w-4 rounded-t-sm" style={{ height: "5%" }}></div>
                                </div>
                                <div className="flex items-end gap-1 h-full w-full justify-center">
                                    <div className="bg-sky-400 w-4 rounded-t-sm" style={{ height: "30%" }}></div>
                                    <div className="bg-orange-400 w-4 rounded-t-sm" style={{ height: "25%" }}></div>
                                </div>
                                <div className="w-full"></div>
                                <div className="w-full"></div>
                                <div className="w-full"></div>
                                <div className="w-full"></div>
                            </div>
                        </div>
                        <div className="flex justify-around mt-2 text-xs text-slate-500">
                            <span>27/02</span><span>28/02</span><span>29/02</span><span>30/03</span><span>1/03</span><span>3/03</span><span>5/03</span><span>6/03</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
