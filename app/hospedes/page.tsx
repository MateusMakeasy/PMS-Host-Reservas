import React from 'react';

export default function HospedesPage() {
    return (
        <div className="font-display bg-gray-100 text-gray-900 bg-[#1f2937] min-h-screen">
            <div className="flex h-screen bg-gray-100">
                <aside className="w-64 bg-[#233044] flex flex-col text-white">
                    <div className="p-6 flex items-center space-x-3">
                        <span className="material-symbols-outlined text-[#F5A623] text-4xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}>cottage</span>
                        <h1 className="text-2xl font-bold">Hospedin</h1>
                    </div>
                    <div className="px-4 mt-2">
                        <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Menu Principal</p>
                    </div>
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="/inicio">
                            <span className="material-symbols-outlined mr-3">home</span>
                            Home
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="#">
                            <span className="material-symbols-outlined mr-3">trending_up</span>
                            Indicadores
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="/mapa">
                            <span className="material-symbols-outlined mr-3">map</span>
                            Mapa
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="/reservas">
                            <span className="material-symbols-outlined mr-3">calendar_month</span>
                            Reservas
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded bg-[#394963] text-white border-l-4 border-[#41A5F5]" href="/hospedes">
                            <span className="material-symbols-outlined mr-3">groups</span>
                            Hóspedes
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="/day-use">
                            <span className="material-symbols-outlined mr-3">light_mode</span>
                            Day Use
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="/transacoes">
                            <span className="material-symbols-outlined mr-3">receipt_long</span>
                            Transações
                        </a>
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="/meu-caixa">
                            <span className="material-symbols-outlined mr-3">point_of_sale</span>
                            Meu Caixa
                        </a>
                    </nav>
                    <div className="p-2 border-t border-gray-700">
                        <a className="flex items-center p-2 text-sm font-medium rounded text-gray-300 hover:bg-[#394963]" href="#">
                            <span className="material-symbols-outlined mr-3">settings</span>
                            Configurações
                        </a>
                    </div>
                </aside>
                <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-100 font-display">
                    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-10">
                        <div>
                            <h2 class="text-xl font-bold text-gray-800">Gerenciamento de Hóspedes</h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-500 hover:text-gray-800">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="flex items-center space-x-3">
                                <img alt="Avatar do administrador" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIc25tIBN5e1ofuoJ68R8ZrfkMGBFUYL5f7xLeJSV-IT6xBwb9A605SyY2KWZTv452xn0EK_cAbkSaUjK_qnYLF7VQuJ2Qb05nU4gbeolle0XQidpRnxgsOTFjQLhzts7yn_2XYkHQxvNf10vr5scOBYDeyHOMDFzsNVKARrCpYHODrmUrpxhscwP8tX5yE1sH3CNoMgo6cLZFZayxcLQdl7g2GLxO0-kXM5MYOq7AqLMZbN1QBW9j2S41J15IN9OutpQ-EF1g_B0" />
                                <span className="text-sm font-medium text-gray-700">Admin</span>
                            </div>
                        </div>
                    </header>
                    <div className="flex-1 p-8 grid grid-cols-3 gap-8 bg-white">
                        <div className="col-span-1 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
                            <div className="p-4 border-b border-gray-200">
                                <h3 className="font-semibold text-lg text-gray-800">Lista de Hóspedes</h3>
                                <p className="text-sm text-gray-500">Selecione um hóspede para ver os detalhes</p>
                            </div>
                            <div className="p-4">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                    <input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 placeholder:text-gray-400 text-gray-900" placeholder="Buscar hóspede..." type="text" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                <ul className="divide-y divide-gray-200">
                                    <li className="p-4 flex items-center cursor-pointer bg-blue-50 border-l-4 border-blue-500">
                                        <img alt="Avatar de João da Silva" className="w-10 h-10 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIiFx8MIztgpUBarlCv_R_XQL1BGhQdmxMu8Sx-iwFen29Px-i76oiAJrdkHUeho4c7ViFYbNS4m0Tp4XPr_yzR5mwjoP2qUMEh50cwrA2OsWzP71qGrSKX3qXgvxSi2R-fN9YICUcjJO0DspWhtl0WztJxpNTOY4Mms5XmStV_LpVw21h9mVQwKkHnldvzKCKsRCktpe2096tAnZzWcgqt26tnEuxDwfr6JAaEGNhg49eEfCoq24vc6rwsyC8GodbHY0N5x1Uh0A" />
                                        <div>
                                            <p className="font-semibold text-gray-800">João da Silva</p>
                                            <p className="text-xs text-gray-500">joao.silva@email.com</p>
                                        </div>
                                    </li>
                                    <li className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
                                        <img alt="Avatar de Maria Oliveira" className="w-10 h-10 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE9wdWaIwLxI4s3i-L2RUpe2xV9remeauQ69KNL_wZcYkKlSTpt4uyFfAgu6JptlyKx0E4cENqPvnZX8kU_AGej9uhLTxQ9K0qzEH12ow4e6s0ElnjE32qzhWc2nhP41peL6ApDQlQPrkE80oGjtbnqE5OPCXiERjbKx3TGkhf594RMYL29LjnjmKd5tDGqcHJRlXz47TKEosnf4O0oawU3GYOL1z-lXQUst4shnthCjLpCmkbiHrN0iUb6v9Ky6YSOSWf5B1SJD4" />
                                        <div>
                                            <p className="font-semibold text-gray-800">Maria Oliveira</p>
                                            <p className="text-xs text-gray-500">maria.oliveira@email.com</p>
                                        </div>
                                    </li>
                                    <li className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
                                        <img alt="Avatar de Carlos Pereira" className="w-10 h-10 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolpftcTWvB8FunjMDITlfsfn0MHCTI-9ZBzsjAcVJjn71LnX8ZmkR2LeZBrRXsY2oStMUvKsIO6MebKclx94z-LZJlp3Q6pTAW1tKvC25Am6ugTdoniWG5UEIYTpus8KY0Lp9pVb78MozPG6ESiXCp8xCwgm0qsnTDZrrC1sBaNNRkSOsCBseQ8xikFbWTAiSZx8_gtjKGlhFtvZx90uzxEh0E8FiFgUjBYcfYLgw7QYIkhMSbGlX9R3kRE3oygAGF7slRSm-BGc" />
                                        <div>
                                            <p className="font-semibold text-gray-800">Carlos Pereira</p>
                                            <p className="text-xs text-gray-500">carlos.pereira@email.com</p>
                                        </div>
                                    </li>
                                    <li className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
                                        <img alt="Avatar de Ana Souza" className="w-10 h-10 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzLR7Kaq4xprlIlGvI1mGMJZyJA5ps3OyGCnsEaM640v_8sx2VXmRl0p0-lwRchmE4E6b4kOOWeb1GIoiJsWLYMnOSo3zOSwK5ClDmRig_YtzywDw3sRzUnPE8lT6uZZKhLPrUw7AvsorwyH0kiXNiN3_yyLZjzaNhVwTiUSfnXZS2ihZQNt67Z0NObaYEtnyxzqtH3xSVCbxEb8Q4V26VI0rcARTLm4pYRsX8k2qEBheS2fZaVg0jQKbZD5pthRK3wdhR9sF73k" />
                                        <div>
                                            <p className="font-semibold text-gray-800">Ana Souza</p>
                                            <p className="text-xs text-gray-500">ana.souza@email.com</p>
                                        </div>
                                    </li>
                                    <li className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
                                        <img alt="Avatar de Pedro Costa" className="w-10 h-10 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPcPFbjkBVuOOzQ-RGL-lDYJrwUW6zYZGm3-rN41nOgEioMFiWMQXikB78N9YRpUJNYrTPgXCKZafytPEsYLwmK0dJoQeXqg7fNWxV873w78QLQQiFv0ehObSZ5I6CdiBFrLu0w6T75nHzXWlE1RmywMfzsSp1u3GVZWG5q4MEIwJVx9jGkoDb4sirGqk6T8yDDsqawmeu3oVmE0iotGC6WcUPVAjkuZFZ3BAVJns4zWvLMYmus6qu7QzGQssg55s-tN71zpehowc" />
                                        <div>
                                            <p className="font-semibold text-gray-800">Pedro Costa</p>
                                            <p className="text-xs text-gray-500">pedro.costa@email.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 border-t border-gray-200">
                                <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                    <span>Adicionar Hóspede</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
                            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img alt="Avatar grande de João da Silva" className="w-20 h-20 rounded-full mr-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSUnt3EqhiIdSRwAHlXG07hrxTM-oCoS0vk2k1_NMtaXjHmN2yy7_rHA10Ezg9Tc29qWWodi0IlBg_qs0xjGopiW_GJRfCY1SxeUqBb3qqqP-hPVY0s2diTYMRlH3aI19fGcYOBNQHUtwa7bB0It4DrnUxLVMz7bs3hwnagTWXyhjgB_-DVQfJcQtpHiyZFAy15eyOjvBGBdf_fOchpHlMBr7KIngouQ0iDzx2HB0pwAK8HV4IA31VSu3qDl3ikp4JObNpi-O1uRc" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">João da Silva</h3>
                                        <p className="text-gray-500">joao.silva@email.com</p>
                                        <p className="text-gray-500">(11) 98765-4321</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-gray-500">edit</span>
                                    </button>
                                    <button className="p-2 rounded-md border border-gray-300 hover:bg-red-50 transition-colors">
                                        <span className="material-symbols-outlined text-red-500">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 p-6 overflow-y-auto">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800">Histórico de Reservas</h4>
                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-800">Reserva #1024</p>
                                                <p className="text-sm text-gray-500">Quarto 201 - Suíte Luxo</p>
                                            </div>
                                            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Concluída</span>
                                        </div>
                                        <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-base mr-1">login</span>
                                                <span>Check-in: 15/05/2023</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-base mr-1">logout</span>
                                                <span>Check-out: 20/05/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-800">Reserva #876</p>
                                                <p className="text-sm text-gray-500">Quarto 105 - Standard</p>
                                            </div>
                                            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Concluída</span>
                                        </div>
                                        <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-base mr-1">login</span>
                                                <span>Check-in: 01/02/2023</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-base mr-1">logout</span>
                                                <span>Check-out: 03/02/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-800">Reserva #541</p>
                                                <p className="text-sm text-gray-500">Quarto 310 - Suíte Master</p>
                                            </div>
                                            <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-1 rounded-full">Cancelada</span>
                                        </div>
                                        <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-base mr-1">login</span>
                                                <span>Check-in: 10/11/2022</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-base mr-1">logout</span>
                                                <span>Check-out: 12/11/2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
