
export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 mt-12 animate-fade-in">
      <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm transition-all duration-500">
        &copy; {new Date().getFullYear()} Syed Abid Ahmed. All rights reserved.
      </div>
    </footer>
  );
}
