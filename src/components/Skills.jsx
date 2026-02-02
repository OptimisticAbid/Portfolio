

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '🟦' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML', icon: '📄' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '🔧' },
      { name: 'Vite', icon: '⚡' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-secondary transition-all duration-500">Skills & Tech Stack</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map(group => (
            <div key={group.title} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-3 text-brand">{group.title}</h3>
              <ul className="flex flex-wrap gap-3 justify-center">
                {group.skills.map(skill => (
                  <li key={skill.name} className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 shadow-sm hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center gap-2">
                    <span>{skill.icon}</span> {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
