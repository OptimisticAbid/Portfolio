

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-brand transition-all duration-500">About Me</h2>
        <p className="text-gray-700 text-lg transition-all duration-500 mb-4">
          I’m a passionate full stack developer with 5+ years of experience building web applications for startups and enterprises. My expertise spans React, Node.js, TypeScript, and modern cloud-native architectures.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Driven by clean code, performance, and user-centric design.</li>
          <li>Advocate for scalable, maintainable solutions and agile teamwork.</li>
          <li>Always learning and experimenting with new technologies.</li>
        </ul>
        <p className="text-gray-700 text-md">
          My approach: <span className="font-semibold text-brand">Listen</span> to users, <span className="font-semibold text-brand">Design</span> for clarity, <span className="font-semibold text-brand">Build</span> for scale, and <span className="font-semibold text-brand">Deliver</span> with pride.
        </p>
      </div>
    </section>
  );
}
