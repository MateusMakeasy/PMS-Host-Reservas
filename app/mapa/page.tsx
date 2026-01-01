import Sidebar from '../../components/Sidebar';

export default function MapaPage() {
    return (
        <div className="flex h-screen font-display bg-gray-50 text-slate-800">
            <Sidebar />

            <main className="flex-1 flex flex-col p-8 bg-white overflow-hidden ml-64">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-[#1E293B]">Mapa de Reservas</h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-white p-1 rounded-md shadow-sm border border-[#E2E8F0]">
                            <button className="p-2 rounded hover:bg-gray-100">
                                <span className="material-symbols-outlined text-[#64748B]">chevron_left</span>
                            </button>
                            <span className="px-4 text-sm font-semibold whitespace-nowrap text-[#334155]">26/02 à 11/03</span>
                            <button className="p-2 rounded hover:bg-gray-100">
                                <span className="material-symbols-outlined text-[#64748B]">chevron_right</span>
                            </button>
                        </div>
                        <button className="bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-bold py-2.5 px-6 rounded-lg shadow transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 700" }}>add</span>
                            <span>Nova Reserva</span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex flex-col border border-[#E2E8F0] rounded-lg overflow-hidden">
                    <div className="overflow-auto flex-1">
                        <div className="grid relative" style={{ gridTemplateColumns: "200px 1fr", minWidth: "2000px" }}>
                            <div className="sticky top-0 left-0 bg-gray-50 z-30 border-b-2 border-r border-[#E2E8F0] p-4 flex items-center justify-center">
                                <span className="font-bold text-[#64748B] text-sm uppercase">Apartamentos</span>
                            </div>
                            <div className="sticky top-0 bg-gray-50 z-20 border-b-2 border-[#E2E8F0]">
                                <div className="grid h-full" style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">SEG</span><span className="block text-lg font-bold text-[#334155]">26</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">TER</span><span className="block text-lg font-bold text-[#334155]">27</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">QUA</span><span className="block text-lg font-bold text-[#334155]">28</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">QUI</span><span className="block text-lg font-bold text-[#334155]">29</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">SEX</span><span className="block text-lg font-bold text-[#334155]">01</span></div>
                                    <div className="text-center font-semibold text-red-500 py-2 border-r border-[#E2E8F0]"><span className="text-xs">SÁB</span><span className="block text-lg font-bold">02</span></div>
                                    <div className="text-center font-semibold text-red-500 py-2 border-r border-[#E2E8F0]"><span className="text-xs">DOM</span><span className="block text-lg font-bold">03</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">SEG</span><span className="block text-lg font-bold text-[#334155]">04</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">TER</span><span className="block text-lg font-bold text-[#334155]">05</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">QUA</span><span className="block text-lg font-bold text-[#334155]">06</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">QUI</span><span className="block text-lg font-bold text-[#334155]">07</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2 border-r border-[#E2E8F0]"><span className="text-xs">SEX</span><span className="block text-lg font-bold text-[#334155]">08</span></div>
                                    <div className="text-center font-semibold text-red-500 py-2 border-r border-[#E2E8F0]"><span className="text-xs">SÁB</span><span className="block text-lg font-bold">09</span></div>
                                    <div className="text-center font-semibold text-red-500 py-2 border-r border-[#E2E8F0]"><span className="text-xs">DOM</span><span className="block text-lg font-bold">10</span></div>
                                    <div className="text-center font-semibold text-[#64748B] py-2"><span className="text-xs">SEG</span><span className="block text-lg font-bold text-[#334155]">11</span></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] sticky left-0 bg-white z-10 border-r border-[#E2E8F0]">
                                <div className="font-bold text-[#64748B] p-3 h-14 flex items-center justify-center bg-gray-50/70 text-sm">STANDARD</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">101</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">102</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">103</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">104</div>
                                <div className="font-bold text-[#64748B] p-3 h-14 flex items-center justify-center bg-gray-50/70 text-sm">DUPLO</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">105</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">106</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">107</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">108</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">109</div>
                                <div className="text-sm text-[#334155] p-3 h-14 flex items-center justify-center">110</div>
                            </div>

                            <div className="relative">
                                <div className="grid h-full divide-x divide-[#E2E8F0]" style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                </div>

                                <div className="absolute inset-0 grid grid-cols-1 divide-y divide-[#E2E8F0]">
                                    <div className="h-14"></div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#F2F4F4] text-[#717D7E] border-l-4 border-[#7f8c8d] rounded-r" style={{ left: "calc(3/15 * 100%)", width: "calc(2/15 * 100%)" }}><span className="truncate font-semibold">Bloqueado</span></div>
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#E9F7EF] text-[#1D8348] border-l-4 border-[#2ECC71] rounded-r" style={{ left: "calc(8/15 * 100%)", width: "calc(3/15 * 100%)" }}><span className="truncate font-semibold">Check-in</span></div>
                                    </div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#E8E8FB] text-[#8884d8] border-l-4 border-[#8884d8] rounded-r" style={{ left: "calc(1/15 * 100%)", width: "calc(3/15 * 100%)" }}><span className="truncate font-semibold">Reserva</span></div>
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#EBF5FF] text-[#3498DB] border-l-4 border-[#3498DB] rounded-r" style={{ left: "calc(6/15 * 100%)", width: "calc(2/15 * 100%)" }}><span className="truncate font-semibold">Pré-reserva</span></div>
                                    </div>
                                    <div className="h-14 relative"></div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#E9F7EF] text-[#1D8348] border-l-4 border-[#2ECC71] rounded-r" style={{ left: "calc(4/15 * 100%)", width: "calc(3/15 * 100%)" }}><span className="truncate font-semibold">Check-in</span></div>
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#F2F4F4] text-[#717D7E] border-l-4 border-[#7f8c8d] rounded-r" style={{ left: "calc(9/15 * 100%)", width: "calc(1/15 * 100%)" }}><span className="truncate font-semibold">Bloqueado</span></div>
                                    </div>
                                    <div className="h-14"></div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#FEF9E7] text-[#B7950B] border-l-4 border-[#F4D03F] rounded-r" style={{ left: "calc(2/15 * 100%)", width: "calc(3/15 * 100%)" }}><span className="truncate font-semibold">Check-out</span></div>
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#E8E8FB] text-[#8884d8] border-l-4 border-[#8884d8] rounded-r" style={{ left: "calc(7/15 * 100%)", width: "calc(4/15 * 100%)" }}><span className="truncate font-semibold">Reserva</span></div>
                                    </div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#FDEDEC] text-[#943126] border-l-4 border-[#E74C3C] rounded-r" style={{ left: "calc(2/15 * 100%)", width: "calc(1/15 * 100%)" }}><span className="truncate font-semibold">Limpeza</span></div>
                                    </div>
                                    <div className="h-14 relative"></div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#E9F7EF] text-[#1D8348] border-l-4 border-[#2ECC71] rounded-r" style={{ left: "calc(1/15 * 100%)", width: "calc(4/15 * 100%)" }}><span className="truncate font-semibold">Check-in</span></div>
                                    </div>
                                    <div className="h-14 relative"></div>
                                    <div className="h-14 relative">
                                        <div className="absolute inset-y-2.5 text-xs p-1.5 flex items-center overflow-hidden bg-[#EBF5FF] text-[#3498DB] border-l-4 border-[#3498DB] rounded-r" style={{ left: "calc(9/15 * 100%)", width: "calc(3/15 * 100%)" }}><span className="truncate font-semibold">Pré-reserva</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-sm text-[#64748B]">
                    <div className="flex items-center"><span className="w-4 h-4 rounded-sm bg-[#3498DB] mr-2"></span><span>Pré-reserva</span></div>
                    <div className="flex items-center"><span className="w-4 h-4 rounded-sm bg-[#8884d8] mr-2"></span><span>Reserva</span></div>
                    <div className="flex items-center"><span className="w-4 h-4 rounded-sm bg-[#2ECC71] mr-2"></span><span>Check-in</span></div>
                    <div className="flex items-center"><span className="w-4 h-4 rounded-sm bg-[#F4D03F] mr-2"></span><span>Check-out</span></div>
                    <div className="flex items-center"><span className="w-4 h-4 rounded-sm bg-[#E74C3C] mr-2"></span><span>Limpeza</span></div>
                    <div className="flex items-center"><span className="w-4 h-4 rounded-sm bg-[#7f8c8d] mr-2"></span><span>Bloqueado</span></div>
                </div>
            </main>
        </div>
    );
}
