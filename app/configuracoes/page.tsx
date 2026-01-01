import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function ConfiguracoesPage() {
    return (
        <div className="bg-background-light min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
                <Header title="Configurações do Sistema" breadcrumb="Configurações" />

                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Preferências Gerais</h3>
                        <p className="text-slate-500">Configurações do sistema em desenvolvimento.</p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between py-3 border-b border-slate-100">
                                <div>
                                    <p className="font-medium text-slate-700">Notificações por Email</p>
                                    <p className="text-sm text-slate-400">Receber alertas de novas reservas</p>
                                </div>
                                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 checked:right-0 checked:border-brand-teal" />
                                    <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer checked:bg-brand-teal"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
