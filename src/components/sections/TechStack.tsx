import React from "react";
import {
  LayoutDashboard, // Frontend
  Database,        // Database
  Brain,           // AI/ML
} from "lucide-react";
import SquareCodeIcon from "@/assets/icons/square-code.svg";
import MobileNotchIcon from "@/assets/icons/mobile-notch.svg";
import CloudUploadAltIcon from "@/assets/icons/cloud-upload-alt.svg";
import SoftwareDevelopmentIcon from "@/assets/icons/software-development.svg";

const TechStack = () => {
  const technologies: Array<{
    icon: string | React.ComponentType<any>;
    category: string;
    techs: string[];
    description: string;
    gradient: string;
    bgColor: string;
    iconBg: string;
  }> = [
    {
      icon: LayoutDashboard,
      category: "Frontend",
      techs: ["React", "Angular", "Vue.js"],
      description: "Modern UI frameworks for responsive web applications",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: SquareCodeIcon,
      category: "Backend",
      techs: ["Node.js", "Python", "Java", ".NET"],
      description: "Robust server-side technologies for scalable APIs",
      gradient: "from-red-400 to-red-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100"
    },
    {
      icon: MobileNotchIcon,
      category: "Mobile",
      techs: ["Flutter", "React Native", "Native iOS/Android"],
      description: "Cross-platform and native mobile development",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      icon: CloudUploadAltIcon,
      category: "Cloud",
      techs: ["AWS", "Azure", "Google Cloud"],
      description: "Scalable cloud infrastructure and services",
      gradient: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100"
    },
    {
      icon: Database,
      category: "Database",
      techs: ["MongoDB", "PostgreSQL", "MySQL"],
      description: "Reliable data storage and management solutions",
      gradient: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: SoftwareDevelopmentIcon,
      category: "DevOps",
      techs: ["Docker", "Kubernetes", "CI/CD"],
      description: "Automated deployment and infrastructure management",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100"
    },
    {
      icon: Brain,
      category: "AI & ML",
      techs: ["TensorFlow", "N8N", "OpenAI"],
      description: "Artificial intelligence and machine learning solutions",
      gradient: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    }
  ];

  return (
    <section className="py-10 lg:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #195C9A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Lines */}
        {/* <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-px h-40 bg-gradient-to-b from-transparent via-orange-300/40 to-transparent"></div> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-foreground mb-3 sm:mb-4">
              Powered by Modern <span className="text-primary">Technology Stack</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Robust, scalable, and future-ready solutions that power your digital transformation
            </p>
          </div>

          {/* Technology Grid - 4-3 Layout */}
          <div className="space-y-8">
            {/* Top Row - 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.slice(0, 4).map((tech, index) => (
                <div 
                  key={index}
                  className={`${tech.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer border border-white/50 backdrop-blur-sm relative overflow-hidden`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon with Enhanced Design */}
                  <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl ${tech.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                    {typeof tech.icon === 'string' ? (
                        <img 
                          src={tech.icon as string} 
                          alt={`${tech.category} Icon`} 
                          className="h-8 w-8"
                          loading="lazy"
                          style={{ 
                            filter: 'brightness(0) saturate(100%)',
                            transition: 'filter 0.3s ease'
                          }}
                        />
                    ) : (
                      React.createElement(tech.icon as React.ComponentType<any>, {
                        className: `h-8 w-8`,
                        style: { 
                          color: '#000000',
                          transition: 'color 0.3s ease'
                        }
                      })
                    )}
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                    {tech.category}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300 relative z-10">
                    {tech.description}
                  </p>
                  
                  {/* Technology List */}
                  <div className="space-y-3 relative z-10">
                    {tech.techs.map((technology, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-muted-foreground flex items-center group-hover:text-foreground transition-all duration-300 hover:translate-x-2"
                      >
                        <div 
                          className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 bg-gradient-to-br ${tech.gradient} group-hover:scale-125 transition-transform duration-300 shadow-sm`}
                        ></div>
                        <span className="font-medium">{technology}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tech.gradient} opacity-5 rounded-bl-3xl`}></div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 Cards (Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {technologies.slice(4, 7).map((tech, index) => (
                <div 
                  key={index + 4}
                  className={`${tech.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer border border-white/50 backdrop-blur-sm relative overflow-hidden`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon with Enhanced Design */}
                  <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl ${tech.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                    {typeof tech.icon === 'string' ? (
                        <img 
                          src={tech.icon as string} 
                          alt={`${tech.category} Icon`} 
                          className="h-8 w-8"
                          loading="lazy"
                          style={{ 
                            filter: 'brightness(0) saturate(100%)',
                            transition: 'filter 0.3s ease'
                          }}
                        />
                    ) : (
                      React.createElement(tech.icon as React.ComponentType<any>, {
                        className: `h-8 w-8`,
                        style: { 
                          color: '#000000',
                          transition: 'color 0.3s ease'
                        }
                      })
                    )}
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                    {tech.category}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300 relative z-10">
                    {tech.description}
                  </p>
                  
                  {/* Technology List */}
                  <div className="space-y-3 relative z-10">
                    {tech.techs.map((technology, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-muted-foreground flex items-center group-hover:text-foreground transition-all duration-300 hover:translate-x-2"
                      >
                        <div 
                          className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 bg-gradient-to-br ${tech.gradient} group-hover:scale-125 transition-transform duration-300 shadow-sm`}
                        ></div>
                        <span className="font-medium">{technology}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tech.gradient} opacity-5 rounded-bl-3xl`}></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
