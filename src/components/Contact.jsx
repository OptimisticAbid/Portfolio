
import { useState } from "react";
import Resume from "./Resume.jsx";

const socials = [
  {
    href: "mailto:syedbid.ah30@gmail.com",
    label: "Email",
    icon: (
      <svg width="22" height="22" fill="currentColor" className="text-secondary"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
    ),
  },
  {
    href: "https://linkedin.com/in/syedabidahmed",
    label: "LinkedIn",
    icon: (
      <svg width="22" height="22" fill="currentColor" className="text-secondary"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
    ),
  },
  {
    href: "https://github.com/OptimisticAbid",
    label: "GitHub",
    icon: (
      <svg width="22" height="22" fill="currentColor" className="text-secondary"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate success
    setSuccess("Message sent! Thank you.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto py-16 px-6 animate-fade-in backdrop-blur-lg  shadow-lg">
      <h2 className="text-3xl font-bold mx-10 mb-4 text-secondary transition-all duration-500">Contact</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white rounded-lg shadow-md border p-6 w-full max-w-md mx-auto">
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="text-secondary"><circle cx="10" cy="10" r="9" strokeWidth="2"/><path strokeWidth="2" d="M10 10a3 3 0 100-6 3 3 0 000 6z"/></svg>
            Name
          </label>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} className="border rounded-md px-4 py-2 focus:border-secondary transition-all duration-300" required />

          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="text-secondary"><rect x="2" y="5" width="16" height="10" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M2 5l8 6 8-6"/></svg>
            Email
          </label>
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="border rounded-md px-4 py-2 focus:border-secondary transition-all duration-300" required />

          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="text-secondary"><rect x="3" y="5" width="14" height="10" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M7 9h6"/></svg>
            Message
          </label>
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="border rounded-md px-4 py-2 focus:border-secondary transition-all duration-300" rows={4} required />

          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}

          <button type="submit" className="btn-primary hover:scale-105 transition-transform duration-300">Send Message</button>

        </form>
        <div className="flex flex-col gap-4 items-center w-full max-w-xs mx-auto mt-8 md:mt-0">
          <div className="text-gray-700 font-medium mb-2">Or reach out directly:</div>
          <div className="flex gap-4">
            {socials.map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:scale-110 transition-transform">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
