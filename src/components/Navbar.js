import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <div className="text-lg font-bold">Aldo Castillo P.</div>
      <div className="text-lg font-bold">Junior Developer</div>
      <div className="flex space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/about">Acerca de mí</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
