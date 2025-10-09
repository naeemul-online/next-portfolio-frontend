"use client";

import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  const { status } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-lg shadow-primary/5"
          : "backdrop-blur-md bg-background/60 border-b border-border/30"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group relative z-10">
          <div className="transition-all duration-300 group-hover:scale-105">
            <Logo />
          </div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavMenu className="flex items-center space-x-1" />
        </div>

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          {status === "authenticated" ? (
            <Button
              onClick={() => signOut()}
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm md:text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Logout
                <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Button>
          ) : (
            <Button
              asChild
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm md:text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Link href="/auth/login">
                <span className="relative z-10 flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </Button>
          )}

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </nav>

      {/* Bottom accent line */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
};

export default Navbar;
