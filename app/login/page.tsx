import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Login() {
    return (
        <div className="min-h-screen flex justify-center bg-gray-700">
            <div className="">
                <form className="flex flex-col gap-4 mt-31 text-white">
                    <h1 className="flex justify-center text-2xl font-bold text-white">Login</h1>
                    <Label htmlFor="email">Email</Label>
                    <Input className="rounded-full" type="email" id="email" name="email" placeholder="Digite seu email" required></Input>
                    <Label htmlFor="password">Senha</Label>
                    <Input className="rounded-full" type="password" id="password" name="password" placeholder="Digite sua senha" required></Input>
                    <div>
                        <p className="">Nao possui uma conta?<a className="text-blue-700" href="#"> clique aqui</a></p>
                    </div>
                    <div className="">
                        <Button type="submit" className=" rounded-full font-bold w-60 bg-black hover:bg-blue-700">Acessar</Button>
                    </div>
                </form>
            </div>
        </div>

    );
}