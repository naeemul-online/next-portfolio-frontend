"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/naeemul-online",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/naeemul-islam",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/naeemul_online",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:naeemul.online@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-background border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-1/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-5">
        <Code2 className="absolute top-20 left-[10%] w-8 h-8 text-primary animate-float" />
        <Sparkles
          className="absolute top-32 right-[15%] w-6 h-6 text-chart-1 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <span
          className="absolute bottom-20 left-[20%] text-3xl font-mono text-chart-2 animate-float"
          style={{ animationDelay: "2s" }}
        >
          {"{ }"}
        </span>
        <span
          className="absolute bottom-32 right-[25%] text-2xl font-mono text-primary animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          {"</>"}
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-foreground text-xl font-bold">
                  Naeemul Islam
                </h2>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer crafting exceptional web experiences with
              modern technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Smart Blog System</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              Quick Links
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              Resources
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blogs"
                  className="group text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="group text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="group text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="group text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              Connect
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Let&apos;s connect and build something amazing together.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex  justify-center items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Naeemul Islam.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
