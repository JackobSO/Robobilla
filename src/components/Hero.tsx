import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse at top right, #F8FAFC 0%, #E0E7FF 25%, #DDD6FE 50%, #F3E8FF 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
          {/* Centered Content */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-slate-800"
                style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Join Avinya our robotics club where creativity meets technology
              </h1>
              
              <p 
                className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                style={{ animationDelay: '200ms' }}
              >
                Build program and complete with robots that push boundaries of what's possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center" style={{ animationDelay: '400ms' }}>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-indigo-700 hover:to-purple-700"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;