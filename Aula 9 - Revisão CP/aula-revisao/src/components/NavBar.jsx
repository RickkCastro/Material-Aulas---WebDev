export default function Navbar() {
  return (
    <header className="bg-black text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <a href="/">GitHub Explorer</a>
      </h1>
      <nav className="space-x-4">
        <a href="/about" className="text-gray-400 hover:underline">
          Sobre
        </a>
        <a href="/contact" className="text-gray-400 hover:underline">
          Contato
        </a>
      </nav>
    </header>
  );
}
