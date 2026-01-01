import React from 'react';

export default function Header({ title, breadcrumb }: { title?: string, breadcrumb?: string }) {
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
                <div className="relative hidden md:block">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-brand-teal w-64"
                    />
                </div>

                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-status-red rounded-full border border-white"></span>
                </button>

                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
                    <span className="material-symbols-outlined">help</span>
                </button>
            </div>
        </header>
    );
}
