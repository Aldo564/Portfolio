const projects = [
    { name: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { name: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
  ];
  
  export default function ProjectsPage() {
    return (
      <section className="py-10">
        <h1 className="text-3xl font-bold text-center">Mis Proyectos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  