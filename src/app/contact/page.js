const socials = [
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/aldo-castillo-pezzani-229b7026a/' },
    { name: 'GitHub', url: 'https://github.com/Aldo564' },
    // Agrega más redes sociales aquí
  ];
  
  export default function ContactPage() {
    return (
      <section className="py-10">
        <h1 className="text-3xl font-bold text-center">Contacto</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {socials.map((social, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-center hover:text-blue-400"> {social.name} </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  