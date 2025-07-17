import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cadastro() {
    return (
        <div className="flex justify-start p-17 min-h-screen bg-black">
            <div className=" text-sky-400">
                <form className="gap-4 flex flex-col ">
                    <h1 className="text-white font-bold text-2xl">Realizar Cadastro</h1>
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input className="rounded-full" type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required></Input>
                    <Label htmlFor="email">Email</Label>
                    <Input className="rounded-full" type="text" id="email" name="email" placeholder="Digite seu email" required></Input>
                    <Label htmlFor="password">Senha</Label>
                    <Input className="rounded-full" type="password" id="password" name="password" placeholder="Digite sua senha" required></Input>
                    <Label htmlFor="password2">Confirme sua senha</Label>
                    <Input className="rounded-full" type="password" id="password2" name="password2" placeholder="Confirme sua senha" required></Input>
                    <div>
                        <Button className="w-48 rounded-full text-black bg-white hover:bg-sky-400"type="submit">Cadastrar</Button>
                    </div>
                </form>
            </div>

        </div>

    );
}