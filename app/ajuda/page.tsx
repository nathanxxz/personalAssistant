'use client';

import { motion } from 'framer-motion';
import { Mic, Bell, CalendarCheck, MessageCircleQuestion, Mail, Cog } from 'lucide-react';
import Navbar from '@/components/ui/navbar';

export default function Ajuda() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
                <motion.div
                    className="max-w-3xl px-6 py-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-center font-extrabold mt-9 text-4xl mb-8 bg-gradient-to-r from-black to-black text-transparent bg-clip-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Central de Ajuda
                    </motion.h1>

                    <motion.p
                        className="mb-8 text-justify text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Precisa de ajuda com o seu assistente pessoal? Abaixo você encontra respostas para as dúvidas mais comuns, além de dicas para aproveitar melhor a plataforma.
                    </motion.p>

                    <motion.h2
                        className="text-center font-bold text-3xl mb-6 text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Perguntas Frequentes
                    </motion.h2>

                    <motion.ul
                        className="list-none space-y-6 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <li className="flex items-start gap-3">
                            <Mic className="text-blue-600 mt-1" size={22} />
                            <div>
                                <strong>Como uso comandos por voz?</strong><br />
                                Clique no botão de microfone ou ative por comando direto. Você pode dizer: “Me lembre de tomar água às 15h”.
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <Bell className="text-yellow-600 mt-1" size={22} />
                            <div>
                                <strong>Recebo notificações?</strong><br />
                                Sim! O sistema envia notificações para lembretes, tarefas e mensagens importantes, via web e em breve no app.
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <CalendarCheck className="text-green-600 mt-1" size={22} />
                            <div>
                                <strong>É possível integrar com o Google Agenda?</strong><br />
                                Em breve! A integração está em desenvolvimento para permitir sincronização automática com seus eventos.
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <Cog className="text-purple-600 mt-1" size={22} />
                            <div>
                                <strong>Como personalizar meu assistente?</strong><br />
                                Você pode configurar a voz, ativar rotinas como “Bom dia” e escolher o comportamento padrão nas configurações.
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <MessageCircleQuestion className="text-pink-600 mt-1" size={22} />
                            <div>
                                <strong>O que fazer se algo não funcionar?</strong><br />
                                Tente recarregar a página ou verificar sua conexão. Persistindo o erro, entre em contato com o suporte.
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <Mail className="text-red-600 mt-1" size={22} />
                            <div>
                                <strong>Como entro em contato com o suporte?</strong><br />
                                Envie um e-mail para <a href="mailto:suporte@seuassistente.com" className="text-blue-700 underline">suporte@seuassistente.com</a> ou use o chat dentro da plataforma.
                            </div>
                        </li>
                    </motion.ul>
                </motion.div>
            </div>
        </>
    );
}
