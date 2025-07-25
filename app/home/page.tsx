import Image from "next/image";
export default function Home() {
  return (
    <header>
      <div className="flex fixed p-7 bg-black w-full px-3">
        <div className="">
          <a href="#">
           
          </a>
        </div>
        <div className="flex items-end flex-1 text-white font-bold">
          <nav className="flex-1">
            <ul className="flex justify-end flex-1">
              <li className="px-4">
                <a href="#" className="hover:text-sky-400">Home</a>
              </li>
              <li className="px-4">
                <a href="#" className="hover:text-sky-400">Ajuda</a>
              </li>
              <li className="px-4">
                <a href="#" className="hover:text-sky-400">Contatos</a>
              </li>
              <li className="px-4">
                <span className="border-r border-white"></span>
              </li>
              <li className="px-4">
                <a href="#" className="hover:text-sky-400">Sobre</a>
              </li>
              <li className="px-4">
                <a href="#" className="hover:text-sky-400">Sair</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-[#dad8d8fa] flex justify-center">
        <div className="mt-67">
          <Image src={"/images/logo-ivox.jpg"} alt="logo-principal" height={400} width={400}></Image>
        </div>

      </div>
    </header>
    
  );
}
