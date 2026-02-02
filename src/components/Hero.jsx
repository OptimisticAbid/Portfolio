

const techStack = [
  { name: 'React', color: 'text-cyan-500' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Tailwind CSS', color: 'text-teal-400' },
  { name: 'MongoDB', color: 'text-green-600' },
  { name: 'Express', color: 'text-gray-700' },
  { name: 'Vite', color: 'text-purple-500' },
];

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 flex flex-col items-center text-center animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary transition-all duration-500">Syed Abid Ahmed</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-brand">Full Stack Developer</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 transition-all duration-500 max-w-2xl">
          I specialize in building elegant, scalable, and user-friendly web applications. My passion is crafting modern digital experiences with clean code and beautiful design.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {techStack.map(tech => (
            <span key={tech.name} className={`px-3 py-1 rounded-full bg-gray-100 shadow text-sm font-medium ${tech.color} animate-pulse`}>{tech.name}</span>
          ))}
        </div>
        <a href="#projects" className="btn-primary hover:scale-105 transition-transform duration-300">View Projects</a>
      </div>
    </section>
  );
}
