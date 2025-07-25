import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
    
export default function Login() {
    return (
        <div className="min-h-screen flex">
            <div className="w-1/2 flex items-center justify-center bg-gray-200 rounded-l-2xl">
                <Image src={"/images/ivox.jpg"} alt="Logo Ivox" width={1000} height={1000} />
            </div>
            <div className="w-1/2 bg-black text-white flex items-center justify-center rounded-r-2xl">
                <form className="w-[80%] max-w-md flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <p className="text-center text-sm text-white">Se você já possui uma conta, pode fazer login com seu email e senha. </p>
                    <Label className="text-sky-400" htmlFor="email">Email</Label>
                    <Input className="rounded-full text-white" type="email" id="email" placeholder="Digite seu email" />
                    <Label className="text-sky-400" htmlFor="password">Senha</Label>
                    <Input className="rounded-full text-white" type="password" id="password" placeholder="Digite sua senha" />
                    <Button className="rounded-full bg-white text-black font-bold hover:bg-sky-400">Entrar</Button>
                    <Button className="rounded-full flex gap-2 justify-center items-center bg-white text-black hover:bg-sky-400">
                        <Image src="/images/google-icon-1.png" alt="Google" width={20} height={20} />
                        Entrar com o Google
                    </Button>
                    <p className="text-white text-sm mt-2">Nao tem conta? <Link href="/cadastro" className="text-sky-400 underline">clique aqui</Link></p>
                </form>
            </div>
        </div>
    );
}
