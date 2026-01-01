'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'sidebar-link-active' : '';
    };

    return (
        <aside className="w-64 bg-sidebar-bg text-white flex flex-col h-screen fixed left-0 top-0 z-50 shadow-lg">
            <div className="h-20 flex items-center px-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-brand-teal">cottage</span>
                    <h1 className="text-xl font-bold tracking-wide">Hospedin</h1>
                </div>
            </div>

            <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
                <p className="px-6 text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Menu Principal</p>

                <Link href="/inicio" className={`sidebar-link ${isActive('/inicio')}`}>
                    <span className="material-symbols-outlined mr-3">home</span>
                    <span className="font-medium">Home</span>
                </Link>

                <Link href="/inicio" className={`sidebar-link ${isActive('/indicadores')}`}>
                    <span className="material-symbols-outlined mr-3">bar_chart</span>
                    <span className="font-medium">Indicadores</span>
                </Link>

                <Link href="/mapa" className={`sidebar-link ${isActive('/mapa')}`}>
                    <span className="material-symbols-outlined mr-3">map</span>
                    <span className="font-medium">Mapa</span>
                </Link>

                <Link href="/reservas" className={`sidebar-link ${isActive('/reservas')}`}>
                    <span className="material-symbols-outlined mr-3">calendar_month</span>
                    <span className="font-medium">Reservas</span>
                </Link>

                <Link href="/hospedes" className={`sidebar-link ${isActive('/hospedes')}`}>
                    <span className="material-symbols-outlined mr-3">groups</span>
                    <span className="font-medium">Hóspedes</span>
                </Link>

                <Link href="/day-use" className={`sidebar-link ${isActive('/day-use')}`}>
                    <span className="material-symbols-outlined mr-3">wb_sunny</span>
                    <span className="font-medium">Day Use</span>
                </Link>

                <Link href="/transacoes" className={`sidebar-link ${isActive('/transacoes')}`}>
                    <span className="material-symbols-outlined mr-3">receipt_long</span>
                    <span className="font-medium">Transações</span>
                </Link>

                <Link href="/meu-caixa" className={`sidebar-link ${isActive('/meu-caixa')}`}>
                    <span className="material-symbols-outlined mr-3">point_of_sale</span>
                    <span className="font-medium">Meu Caixa</span>
                </Link>

                <div className="pt-4 mt-4 border-t border-white/10">
                    <Link href="/configuracoes" className={`sidebar-link ${isActive('/configuracoes')}`}>
                        <span className="material-symbols-outlined mr-3">settings</span>
                        <span className="font-medium">Configurações</span>
                    </Link>
                </div>
            </nav>

            <Link href="/configuracoes">
                <div className="p-4 bg-white/5 mx-4 mb-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-xs">
                            MP
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">Minha Pousada</p>
                            <p className="text-xs text-slate-400 truncate">admin@hospedin.com</p>
                        </div>
                    </div>
                </div>
            </Link>
        </aside>
    );
}
