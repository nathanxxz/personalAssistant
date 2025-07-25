'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mic, CalendarCheck, Brain, Smartphone } from 'lucide-react';
import Navbar from "@/components/ui/navbar";

export default function Sobre() {
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
                        Quem somos?
                    </motion.h1>

                    <motion.p
                        className="mb-8 text-justify text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Somos uma equipe apaixonada por tecnologia e produtividade. Desenvolvemos uma plataforma de assistente pessoal baseada em inteligência artificial, feita para ajudar você a organizar sua rotina de um jeito simples, intuitivo e moderno. Nosso foco é transformar a interação com sistemas digitais em algo mais natural — usando sua própria voz, seus próprios comandos e o apoio de IAs avançadas como ChatGPT e Gemini.
                    </motion.p>

                    <motion.h2
                        className="text-center font-bold text-3xl mb-4 text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Nossa missão
                    </motion.h2>

                    <motion.p
                        className="mb-8 text-justify text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Levar ao usuário uma experiência única de organização pessoal, onde a tecnologia se adapta a você — e não o contrário. Queremos que você sinta que tem um verdadeiro assistente ao seu lado, sempre pronto para lembrar, responder e agir.
                    </motion.p>

                    <motion.h2
                        className="text-center font-bold text-3xl mb-4 text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        O que oferecemos
                    </motion.h2>

                    <motion.ul
                        className="list-none space-y-4 mb-8 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <li className="flex items-start gap-2"><Mic className="text-blue-500 mt-1" size={20} /> Comandos por voz ou texto, com resposta em áudio e texto.</li>
                        <li className="flex items-start gap-2"><Sparkles className="text-purple-500 mt-1" size={20} /> Voz personalizada: escolha uma voz padrão ou clone a sua.</li>
                        <li className="flex items-start gap-2"><CalendarCheck className="text-green-500 mt-1" size={20} /> Organização de tarefas, lembretes e cronogramas.</li>
                        <li className="flex items-start gap-2"><Brain className="text-yellow-500 mt-1" size={20} /> Integração com inteligências artificiais poderosas.</li>
                        <li className="flex items-start gap-2"><Smartphone className="text-red-500 mt-1" size={20} /> Interface simples e responsiva para web.</li>
                    </motion.ul>

                    <motion.h2
                        className="text-center font-bold text-3xl mb-4 text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Tecnologias por trás da experiência
                    </motion.h2>

                    <motion.p
                        className="mb-8 text-justify text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        Nossa plataforma é construída com tecnologias modernas e robustas como React, Next.js, Spring Boot, Python (FastAPI), Firebase, ElevenLabs e Amazon S3 — tudo para garantir velocidade, segurança e qualidade.
                    </motion.p>

                    <motion.h2
                        className="text-center font-bold text-3xl mb-4 text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Para onde vamos?
                    </motion.h2>

                    <motion.p
                        className="text-justify text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                    >
                        Estamos evoluindo constantemente. Em breve, você poderá integrar com o Google Calendar, criar rotinas inteligentes como “Bom dia” (previsão + agenda + lembretes), receber notificações em tempo real e usar nosso app mobile.
                    </motion.p>
                </motion.div>
            </div>
        </>
    );
}
