import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function HomePrincipal() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="w-[90%] max-w-xl text-center flex flex-col gap-6">
                <h1 className="text-4xl font-bold">Bem-vindo ao Ivox</h1>
                <p className="text-gray-300 text-sm">
                    Acesse sua conta ou crie uma nova para começar.
                </p>

                <div className="flex flex-col gap-4">
                    <Link href="/login">
                        <Button className="w-full rounded-full bg-white text-black font-bold hover:bg-sky-400">
                            Fazer Login
                        </Button>
                    </Link>

                    <Link href="/cadastro">
                        <Button className="w-full rounded-full bg-sky-400 text-white font-bold hover:bg-white hover:text-black">
                            Criar Conta
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

