"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

const skills = [
  { icon: Globe, label: "React" },
  { icon: Server, label: "Next.js" },
  { icon: Database, label: "MongoDB" },
  { icon: Code, label: "TypeScript" },
  { icon: GitBranch, label: "Node.js" },
  { icon: Smartphone, label: "Responsive" },
];

export default function AboutSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="relative container mx-auto px-6 md:px-12 lg:py-16   overflow-hidden bg-background transition-colors duration-700"
    >
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="About Me" subtitle="A glimpse into my world" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* LEFT: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold leading-snug">
              I’m a{" "}
              <span className="text-primary font-bold">
                Full-Stack Developer
              </span>{" "}
              passionate about building modern, user-focused applications.
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Since starting my development journey in 2019, I’ve immersed
              myself in crafting clean, scalable, and delightful user
              experiences using the JavaScript ecosystem.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My core strengths include React, Next.js, Node.js, and MongoDB —
              and I love translating creative ideas into seamless digital
              products.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy exploring new technologies,
              contributing to open-source, and continuously learning how to
              create impactful products.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/90"
              >
                Let’s Connect
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Skill Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-border bg-card hover:bg-accent/30 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <skill.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
