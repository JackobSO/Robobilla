
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-xl shadow-xl" : "bg-white/30 backdrop-blur-lg"
    )}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className={cn(
          "flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-xl" 
            : "bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg"
        )}>
          <a href="#" className="flex items-center space-x-2" onClick={(e) => { e.preventDefault(); scrollToTop(); }} aria-label="Avinya">
            <img 
              src="https://ik.imagekit.io/t2pd1accwu/WhatsApp%20Image%202025-08-07%20at%2013.57.56_e746497a.jpg?updatedAt=1754927151469" 
              alt="Avinya Robotics Club Logo" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={cn(
              "nav-link font-medium transition-colors duration-150",
              isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )} onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a>
            <a href="#about" className={cn(
              "nav-link font-medium transition-colors duration-150",
              isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )}>About</a>
            <a href="#events" className={cn(
              "nav-link font-medium transition-colors duration-150",
              isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )}>Events</a>
            <a href="#merch" className={cn(
              "nav-link font-medium transition-colors duration-150",
              isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )}>Merch</a>
            <a href="#members" className={cn(
              "nav-link font-medium transition-colors duration-150",
              isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )}>Members</a>
            <a href="#contact" className={cn(
              "nav-link font-medium transition-colors duration-150",
              isScrolled ? "text-slate-700 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )}>Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-200",
              isScrolled ? "text-slate-600 hover:text-indigo-600" : "text-slate-800 hover:text-indigo-600"
            )} 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/95 backdrop-blur-xl" : "bg-white/40 backdrop-blur-xl",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <nav className="flex flex-col space-y-6 items-center">
            <a href="#" className={cn(
              "text-2xl font-medium py-3 px-6 w-full text-center rounded-xl transition-all duration-200",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 hover:text-indigo-600" 
                : "text-slate-800 hover:bg-white/30"
            )} onClick={(e) => { e.preventDefault(); scrollToTop(); setIsMenuOpen(false); document.body.style.overflow = ''; }}>Home</a>
            <a href="#about" className={cn(
              "text-2xl font-medium py-3 px-6 w-full text-center rounded-xl transition-all duration-200",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 hover:text-indigo-600" 
                : "text-slate-800 hover:bg-white/30"
            )} onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>About</a>
            <a href="#events" className={cn(
              "text-2xl font-medium py-3 px-6 w-full text-center rounded-xl transition-all duration-200",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 hover:text-indigo-600" 
                : "text-slate-800 hover:bg-white/30"
            )} onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Events</a>
            <a href="#merch" className={cn(
              "text-2xl font-medium py-3 px-6 w-full text-center rounded-xl transition-all duration-200",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 hover:text-indigo-600" 
                : "text-slate-800 hover:bg-white/30"
            )} onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Merch</a>
            <a href="#members" className={cn(
              "text-2xl font-medium py-3 px-6 w-full text-center rounded-xl transition-all duration-200",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 hover:text-indigo-600" 
                : "text-slate-800 hover:bg-white/30"
            )} onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Members</a>
            <a href="#contact" className={cn(
              "text-2xl font-medium py-3 px-6 w-full text-center rounded-xl transition-all duration-200",
              isScrolled 
                ? "text-slate-700 hover:bg-slate-100 hover:text-indigo-600" 
                : "text-slate-800 hover:bg-white/30"
            )} onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
