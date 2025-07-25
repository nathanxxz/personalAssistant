import Navbar from "@/components/ui/navbar";

export default function Sobre() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-white text-black">
                <div className="max-w-3xl px-6 py-12">
                    <h1 className="text-center font-bold mt-9 text-4xl mb-8">Quem somos?</h1>
                    <p className="mb-8 text-justify">
                        Somos uma equipe apaixonada por tecnologia e produtividade. Desenvolvemos uma plataforma de assistente pessoal baseada em inteligência artificial, feita para ajudar você a organizar sua rotina de um jeito simples, intuitivo e moderno.
                        Nosso foco é transformar a interação com sistemas digitais em algo mais natural — usando sua própria voz, seus próprios comandos e o apoio de IAs avançadas como ChatGPT e Gemini.
                    </p>

                    <h2 className="text-center font-bold text-3xl mb-4">Nossa missão</h2>
                    <p className="mb-8 text-justify">
                        Levar ao usuário uma experiência única de organização pessoal, onde a tecnologia se adapta a você — e não o contrário. Queremos que você sinta que tem um verdadeiro assistente ao seu lado, sempre pronto para lembrar, responder e agir.
                    </p>

                    <h2 className="text-center font-bold text-3xl mb-4">O que oferecemos</h2>
                    <ul className="list-disc list-inside mb-8 text-justify">
                        <li>Comandos por voz ou texto, com resposta em áudio e texto.</li>
                        <li>Voz personalizada: escolha uma voz padrão ou clone a sua.</li>
                        <li>Organização de tarefas, lembretes e cronogramas.</li>
                        <li>Integração com inteligências artificiais poderosas.</li>
                        <li>Interface simples e responsiva para web.</li>
                    </ul>

                    <h2 className="text-center font-bold text-3xl mb-4">Tecnologias por trás da experiência</h2>
                    <p className="mb-8 text-justify">
                        Nossa plataforma é construída com tecnologias modernas e robustas como React, Next.js, Spring Boot, Python (FastAPI), Firebase, ElevenLabs e Amazon S3 — tudo para garantir velocidade, segurança e qualidade.
                    </p>

                    <h2 className="text-center font-bold text-3xl mb-4">Para onde vamos?</h2>
                    <p className="text-justify">
                        Estamos evoluindo constantemente. Em breve, você poderá integrar com o Google Calendar, criar rotinas inteligentes como “Bom dia” (previsão + agenda + lembretes), receber notificações em tempo real e usar nosso app mobile.
                    </p>
                </div>
            </div>
        </>
    );
}
