import Link from "next/link";
import "@/styles/globals.css";
import Titulo from "./sobre";

function App() {
  return (
    <div className="m-5">
      <div className="h-screen">
        <nav className="rounded-md p-5 flex justify-between items-center gap-20 bg-gray-500">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/Contato">Contato</Link>
          </div>
          <div>
            <Link href="/Sobre">Sobre nós</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
