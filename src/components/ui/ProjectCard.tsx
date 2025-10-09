import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  demoLink: string;
  githubLink: string;
  tech: string[];
  delay?: number;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  demoLink,
  githubLink,
  tech,
  delay = 0,
  className,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-2xl overflow-hidden transition-all duration-700",
        " bg-card border border-border shadow-lg hover:shadow-2xl",
        "hover:-translate-y-2",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      style={{ transitionDelay: `${delay * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />

      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Sparkle Effect on Hover */}
        <div
          className={cn(
            "absolute top-4 right-4 transition-all duration-500",
            isHovered
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-0 rotate-45"
          )}
        >
          <Sparkles className="w-6 h-6 text-chart-1 drop-shadow-lg" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-6 flex flex-col h-[calc(100%-14rem)]">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, i) => (
            <span
              key={i}
              className={cn(
                "text-xs px-3 py-1 rounded-full font-medium transition-all duration-300",
                "bg-accent/80 text-accent-foreground border border-border",
                "group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg",
              "bg-primary text-primary-foreground shadow-md",
              "hover:shadow-lg hover:scale-105 active:scale-95",
              "transition-all duration-300"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg",
              "bg-secondary text-secondary-foreground border border-border shadow-md",
              "hover:bg-accent hover:shadow-lg hover:scale-105 active:scale-95",
              "transition-all duration-300"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
          "bg-gradient-to-br from-primary/5 via-transparent to-chart-1/5"
        )}
      />

      {/* Bottom Corner Accent */}
      <div
        className={cn(
          "absolute bottom-0 right-0 w-24 h-24 transition-all duration-700",
          isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-primary to-transparent rounded-tl-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
