
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">Pokédex</h1>
      <div className="space-x-4">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
      </div>
    </nav>
  );
}
