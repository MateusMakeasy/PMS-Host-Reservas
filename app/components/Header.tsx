'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header({ title, breadcrumb }: { title?: string, breadcrumb?: string }) {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue.trim()) {
            router.push(`/reservas?search=${encodeURIComponent(searchValue)}`);
        }
    };

    return (
        <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-40 flex items-center justify-between px-8 shadow-sm">
            <div>
                {breadcrumb && (
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                        Home <span className="material-symbols-outlined text-[10px]">chevron_right</span> {breadcrumb}
                    </p>
                )}
                {title && <h2 className="text-2xl font-bold text-slate-800">{title}</h2>}
            </div>

            <div className="flex items-center gap-4">
                <form onSubmit={handleSearch} className="relative hidden md:block">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-brand-teal w-64 transition-all"
                    />
                </form>

                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500 relative"
                    >
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-status-red rounded-full border border-white"></span>
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                            <div className="px-4 py-2 border-b border-slate-50">
                                <h3 className="text-sm font-bold text-slate-700">Notificações</h3>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0 border-l-2 border-l-brand-teal">
                                    <p className="text-xs font-bold text-slate-700">Nova Reserva #1055</p>
                                    <p className="text-xs text-slate-500 mt-1">João da Silva acabou de reservar a Suíte Master.</p>
                                    <p className="text-[10px] text-slate-400 mt-1">Há 5 min</p>
                                </div>
                                <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0">
                                    <p className="text-xs font-bold text-slate-700">Checkout Pendente</p>
                                    <p className="text-xs text-slate-500 mt-1">Quarto 104 precisa realizar checkout.</p>
                                    <p className="text-[10px] text-slate-400 mt-1">Há 1 hora</p>
                                </div>
                            </div>
                            <div className="px-4 py-2 border-t border-slate-50 text-center">
                                <Link href="#" className="text-xs font-bold text-brand-teal hover:underline">Ver todas</Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setShowHelp(!showHelp)}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                    >
                        <span className="material-symbols-outlined">help</span>
                    </button>

                    {showHelp && (
                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                            <Link href="#" className="flex items-center px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-teal">
                                <span className="material-symbols-outlined text-lg mr-3">menu_book</span>
                                Central de Ajuda
                            </Link>
                            <Link href="#" className="flex items-center px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-teal">
                                <span className="material-symbols-outlined text-lg mr-3">support_agent</span>
                                Falar com Suporte
                            </Link>
                            <Link href="#" className="flex items-center px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-teal">
                                <span className="material-symbols-outlined text-lg mr-3">play_circle</span>
                                Tutoriais em Vídeo
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
