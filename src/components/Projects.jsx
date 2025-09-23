
const projects = [
  {
    name: "URL Shortener",
    description: (
      <>
        Engineered a full-stack application for creating, managing, and tracking shortened URLs with analytics.<br />
        Designed a responsive React + Tailwind UI, supporting custom aliases and expiry dates.<br />
        Built REST APIs with Express & MongoDB, integrating schema indexing & caching to cut response time by ~30% on datasets of 10k+ URLs.<br />
        Added analytics (click count, device type, geolocation) to track usage patterns.
      </>
    ),
    link: "https://github.com/OptimisticAbid/mern-project", // Replace with actual project link if available
    ongoing: false,
  },
  {
    name: "Stock Management Application",
    description: (
      <>
        {/* <span className="inline-block text-xs px-2 py-1 bg-secondary text-white rounded mb-1">Ongoing</span><br /> */}
        Planning and designing a Stock Management System using Node.js, Express, and MongoDB to streamline product inventory, sales, and purchase records.<br />
        Proposed features include stock level tracking, low-stock alerts, transaction history, and role-based user authentication.<br />
        Architecting the database schema with indexing for efficient queries and scalable performance on large datasets.<br />
        Designing RESTful APIs with validation, error handling, and secure authentication to ensure reliability and robustness.
      </>
    ),
    link: "#", // Replace with actual project link if available
    ongoing: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-primary transition-all duration-500">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project.name} className="p-6 bg-white rounded-lg shadow-md border hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-brand transition-colors duration-300 flex items-center gap-2">
              {project.name}
              {project.ongoing && (
                <span className="inline-block text-xs px-2 py-1 bg-secondary text-white rounded">Ongoing</span>
              )}
            </h3>
            <div className="text-gray-700 mb-4 transition-colors duration-300 text-sm leading-relaxed">{project.description}</div>
            <a href={project.link} className="inline-flex items-center gap-1 text-primary hover:underline hover:text-secondary transition-colors duration-300">
              <span>Project Link</span>
              <svg width="18" height="18" fill="none" stroke="currentColor" className="inline"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7-7m0 0v6m0-6h-6"/></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
