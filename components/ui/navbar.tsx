
export default function Navbar() {
  return (
    <div className="flex fixed p-7 bg-black w-full px-3 z-50">
      <div className="flex items-end flex-1 text-white font-bold">
        <nav className="flex-1">
          <ul className="flex justify-end flex-1">
            <li className="px-4">
              <a href="/home" className="hover:text-sky-400">Home</a>
            </li>
            <li className="px-4">
              <a href="/ajuda" className="hover:text-sky-400">Ajuda</a>
            </li>
          
            <li className="px-4">
              <span className="border-r border-white"></span>
            </li>
            <li className="px-4">
              <a href="/sobre" className="hover:text-sky-400">Sobre</a>
            </li>
            <li className="px-4">
              <a href="/login" className="hover:text-sky-400">Sair</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
