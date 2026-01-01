
import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-[#2C3E50] text-white flex flex-col z-10 fixed h-full font-display">
            <div className="h-16 flex items-center justify-center border-b border-white/10">
                <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-3xl text-amber-400">home</span>
                    <span className="text-2xl font-bold">Hospedin</span>
                </div>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                <p className="px-4 text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Menu Principal</p>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/inicio">
                    <span className="material-symbols-outlined">home</span> Home
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/home">
                    <span className="material-symbols-outlined">leaderboard</span> Indicadores
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/mapa">
                    <span className="material-symbols-outlined">map</span> Mapa
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/reservas">
                    <span className="material-symbols-outlined">calendar_month</span> Reservas
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/hospedes">
                    <span className="material-symbols-outlined">group</span> Hóspedes
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/day-use">
                    <span className="material-symbols-outlined">wb_sunny</span> Day Use
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/transacoes">
                    <span className="material-symbols-outlined">receipt_long</span> Transações
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/meu-caixa">
                    <span className="material-symbols-outlined">payments</span> Meu Caixa
                </Link>
                <Link className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-md text-slate-300 hover:bg-white/10" href="/configuracoes">
                    <span className="material-symbols-outlined">settings</span> Configurações
                </Link>
            </nav>
        </aside>
    );
}
