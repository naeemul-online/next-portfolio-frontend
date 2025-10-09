"use client";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

const Projects = () => {
  const projects = [
    {
      title: "Hostel Management System",
      description:
        "A comprehensive hostel management system that handles room allocation, student registration, meal management, and administrative tasks. Features include user authentication, dashboard analytics, and payment processing.",
      imageSrc:
        "https://naeemul-portfolio.netlify.app/assets/proj6-BkWyMDW7.png",
      demoLink: "https://hostel-management-client.web.app/",
      githubLink:
        "https://github.com/naeemul-online/hostel-management-client.git",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    },
    {
      title: "Book Vibe",
      description:
        "An online book marketplace where users can browse, review, and purchase books. Features include book categorization, user reviews, wishlist functionality, and a responsive reading interface.",
      imageSrc:
        "https://naeemul-portfolio.netlify.app/assets/proj2-WyLGuxwP.png",
      demoLink: "https://creepy-goose.surge.sh/",
      githubLink: "https://github.com/naeemul-online/book-vibe.git",
      tech: ["ReactJs", "TailwindCss", "Javascript"],
    },
    {
      title: "Art Gallery",
      description:
        "A digital art gallery platform showcasing various artworks and exhibitions. Users can explore collections, purchase artwork, and interact with artists. Includes features like virtual tours, artist profiles, and secure payment integration.",
      imageSrc:
        "https://naeemul-portfolio.netlify.app/assets/proj4-BuOiGRTo.png",
      demoLink: "https://art-gallery-a10.web.app/",
      githubLink: "https://github.com/naeemul-online/art-gallery-client.git",
      tech: ["React", "Tailwind CSS", "nodejs", "express", "mongodb"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative container mx-auto px-6 md:px-12 lg:px-14 lg:py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-1/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="section-padding relative z-10">
        <SectionTitle
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              tech={project.tech}
              delay={i}
            />
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-border" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div
              className="w-2 h-2 rounded-full bg-chart-1 animate-pulse"
              style={{ animationDelay: "200ms" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-chart-2 animate-pulse"
              style={{ animationDelay: "400ms" }}
            />
          </div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
