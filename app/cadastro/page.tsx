import { Label } from "@/components/ui/label"; import { Input } from "@/components/ui/input"; import { Button } from "@/components/ui/button"; import Image from "next/image"; import Link from "next/link";

export default function Cadastro() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-black flex flex-col justify-center px-20">
        <form className="flex flex-col gap-3 text-sky-400">
          <h1 className="text-white font-bold text-center text-2xl">Realizar Cadastro</h1>
          <p className="text-sm text-white mb-4">Cadastre-se para usar o IVOX, seu assistente pessoal com IA, comandos por voz e respostas personalizadas.</p>
          <Label htmlFor="nome">Nome completo</Label>
          <Input id="nome" name="nome" type="text" placeholder="Nome completo" className="rounded-full px-4 py-2 bg-black border border-white text-white" required />
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Email" className="rounded-full px-4 py-2 bg-black border border-white text-white" required />
          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="password" placeholder="Senha" className="rounded-full px-4 py-2 bg-black border border-white text-white" required />
          <Label htmlFor="password2">Confirmar senha</Label>
          <Input id="password2" name="password2" type="password" placeholder="Confirmar senha" className="rounded-full px-4 py-2 bg-black border border-white text-white" required />
          <p className="text-white text-sm mt-2">Já tem conta? <Link href="/login" className="text-sky-400 underline">clique aqui</Link></p>
          <Button type="submit" className="bg-white text-black rounded-full mt-4 w-full hover:bg-sky-400 hover:text-white transition">Cadastrar</Button>
          <Button type="submit" className="bg-white text-black rounded-full mt-4 w-full hover:bg-sky-400 hover:text-white transition"> <Image src="/images/google-icon-1.png" alt="Google" width={20} height={20} />
            Criar conta com Google</Button>
        </form>
      </div>
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <Image src="/images/ivox-2.jpg" alt="Logo IVOX" width={1000} height={1000} />
      </div>
    </div>
  );
}
