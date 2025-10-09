import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/naeemul-online",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/naeemulislam",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/naeemul_online",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:naeemul.online@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className={cn("flex space-x-4", className)}>
      {socialLinks.map((link, i) => {
        const Icon = link.icon;

        return (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="glass p-3 rounded-full transition-all duration-300 hover:bg-accent/20 hover:scale-110"
          >
            <Icon size={18} className="text-accent" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
