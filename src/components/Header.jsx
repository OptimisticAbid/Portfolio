
import { useState } from "react";

const socialLinks = [
  {
    href: "https://linkedin.com/in/syedabidahmed",
    label: "LinkedIn",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-primary"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
    ),
  },
  {
    href: "https://github.com/syedabidahmed",
    label: "GitHub",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-primary"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
    ),
  },
  {
    href: "mailto:syedabidahmed@gmail.com",
    label: "Email",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-primary"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
    ),
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <span className="font-bold text-2xl text-primary tracking-tight">Syed Abid Ahmed</span>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" onClick={e => handleNavClick(e, 'about')} className="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="#skills" onClick={e => handleNavClick(e, 'skills')} className="text-gray-700 hover:text-primary transition-colors">Skills</a>
          <a href="#projects" onClick={e => handleNavClick(e, 'projects')} className="text-gray-700 hover:text-primary transition-colors">Projects</a>
          <a href="#resume" onClick={e => handleNavClick(e, 'resume')} className="text-gray-700 hover:text-primary transition-colors">Resume</a>
          <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center space-x-3 ml-6">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:scale-110 transition-transform">
              {link.icon}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" onClick={() => setOpen(!open)} aria-label="Open navigation">
          <svg width="28" height="28" fill="none" stroke="currentColor" className="text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h20M4 16h20"/></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" onClick={e => handleNavClick(e, 'about')} className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={e => handleNavClick(e, 'skills')} className="text-gray-700 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={e => handleNavClick(e, 'projects')} className="text-gray-700 hover:text-primary transition-colors">Projects</a>
            <a href="#resume" onClick={e => handleNavClick(e, 'resume')} className="text-gray-700 hover:text-primary transition-colors">Resume</a>
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:scale-110 transition-transform">
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
