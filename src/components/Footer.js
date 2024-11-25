const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          {/* Enlaces de redes sociales */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/Aldo564"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aldo-castillo-pezzani-229b7026a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:aldo.castillo.pezzani@gmail.com"
              className="hover:text-blue-400"
            >
              Email
            </a>
          </div>
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Aldo Castillo. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  