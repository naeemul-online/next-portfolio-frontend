
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div 
      ref={ref} 
      className={cn(
        "mb-12 text-center transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <div className="text-reveal-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className="mt-4 w-20 h-1 bg-accent rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
