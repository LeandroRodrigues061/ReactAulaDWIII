export default function index() {
  return (
    <div className="m-5">
      <div className="h-screen">
        <nav className="rounded-md p-5 flex justify-between items-center gap-20 bg-gray-500">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href={"/contato"}>Contato</Link>
          </div>
          <div>
            <Link href={"/sobre"}>Sobre nós</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

