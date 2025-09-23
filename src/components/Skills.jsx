
const skills = [
  "React", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Express", "MongoDB", "PostgreSQL", "Git", "Vite"
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-secondary transition-all duration-500">Skills</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <li key={skill} className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 shadow-sm hover:bg-secondary hover:text-white transition-colors duration-300">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
