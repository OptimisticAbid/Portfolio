import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="max-w-5xl mx-auto py-16 px-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center text-primary">Resume</h2>
      <div className="bg-white rounded-lg shadow-md border p-6 flex flex-col items-center">
        <p className="text-gray-700 mb-4 text-center">Download my latest resume </p>
        <a
          href="/resume.pdf"
          download
          className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" className="inline text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4"/></svg>
          Download Resume
        </a>
       
      </div>
    </section>
  );
}
