
import React, { useEffect, useRef, useState } from "react";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Users, 
  Rocket, 
  Target,
  Lightbulb,
  Code
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-700 delay-${index * 100} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="group relative p-6 rounded-2xl transition-all duration-500 hover:translate-y-[-8px] bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon container with gradient background */}
        <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="relative z-10 text-xl font-semibold mb-3 text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="relative z-10 text-slate-600 leading-relaxed">
          {description}
        </p>
        
        {/* Subtle border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-200/50 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      icon: <Cpu size={24} />,
      title: "Advanced Robotics",
      description: "Cutting-edge robotics technology with state-of-the-art hardware and software integration."
    },
    {
      icon: <Zap size={24} />,
      title: "Innovation Hub",
      description: "A creative space where ideas come to life through collaborative innovation and experimentation."
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes ensuring reliable and robust robotic solutions."
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Work with passionate engineers and designers in a collaborative, supportive environment."
    },
    {
      icon: <Rocket size={24} />,
      title: "Rapid Prototyping",
      description: "Fast iteration cycles from concept to working prototype using modern development tools."
    },
    {
      icon: <Target size={24} />,
      title: "Goal-Oriented",
      description: "Clear objectives and milestones to guide your robotics journey and measure progress."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Creative Problem Solving",
      description: "Develop innovative solutions to complex challenges through creative thinking and technical expertise."
    },
    {
      icon: <Code size={24} />,
      title: "Programming Excellence",
      description: "Master programming languages and frameworks essential for modern robotics development."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium mb-6 border border-indigo-200/50">
            Our Features
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Why Choose{" "}
            <span className="gradient-text">Avinya Robotics</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of robotics with cutting-edge technology, innovative solutions, and a passionate team dedicated to pushing boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
