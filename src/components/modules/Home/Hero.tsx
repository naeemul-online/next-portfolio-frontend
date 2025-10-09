"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative  container mx-auto px-6 md:px-12 lg:py-16  flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--chart-1-rgb,139,92,246),0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--chart-2-rgb,34,197,94),0.1),transparent_50%)]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      {/* Floating Orbs with Parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-chart-1/15 blur-[100px] animate-glow-pulse"
          style={{
            animationDelay: "2s",
            transform: `translate(${-mousePosition.x * 0.03}px, ${
              -mousePosition.y * 0.03
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-chart-2/10 blur-[80px] animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${
              mousePosition.y * 0.04
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-10 animate-float">
          <Code2 className="w-12 h-12 text-primary" />
        </div>
        <div
          className="absolute top-40 right-[15%] opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sparkles className="w-10 h-10 text-chart-1" />
        </div>
        <div
          className="absolute bottom-32 left-[20%] opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <span className="text-6xl font-mono text-chart-2">{"{ }"}</span>
        </div>
        <div
          className="absolute bottom-48 right-[25%] opacity-10 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="text-5xl font-mono text-primary">{"</>"}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Badge */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 rounded-full bg-card/50 backdrop-blur-md border border-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent font-semibold">
              Available for Opportunities
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6 mb-12">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block mb-2">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent animate-gradient-x inline-block">
              Naeemul Islam
            </span>
          </h1>

          <h2
            className={`text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground/90 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Full-Stack Developer &{" "}
            <span className="text-primary">Problem Solver</span>
          </h2>

          <p
            className={`max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Crafting exceptional web experiences with modern technologies.
            Specializing in{" "}
            <span className="text-foreground font-semibold">JavaScript</span>,{" "}
            <span className="text-foreground font-semibold">TypeScript</span>,
            and the{" "}
            <span className="text-foreground font-semibold">MERN stack</span>.
            Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div
          className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {["React", "Node.js", "TypeScript", "MongoDB", "Next.js"].map(
            (tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-card/50 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            asChild
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg group"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={`flex gap-4 justify-center transition-all duration-700 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-xs text-muted-foreground font-medium group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <div className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border group-hover:border-primary/50 animate-bounce group-hover:animate-none transition-all">
              <ChevronDown className="w-5 h-5 text-primary" />
            </div>
          </div>
        </a>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
