"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactMe = () => {
  const { ref, isInView } = useInView<HTMLElement>();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form data:", data);

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
        duration: 5000,
      });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/naeemul-online",
      label: "GitHub",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/naeemul-islam",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/naeemul_online",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: Mail,
      href: "mailto:naeemul.online@gmail.com",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative container mx-auto px-6 md:px-12 lg:py-16 transition-colors duration-700 overflow-hidden bg-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,59,130,246),0.05),transparent_70%)]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Have a project in mind?
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              Let&apos;s work together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s start a conversation
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Let&apos;s start a conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:naeemul.online@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      naeemul.online@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-chart-1/10 group-hover:bg-chart-1/20 transition-colors">
                    <MapPin className="w-6 h-6 text-chart-1" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                      Location
                    </h4>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Social Media</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={cn(
                      "p-3 rounded-xl bg-card border border-border transition-all duration-300",
                      "hover:scale-110 hover:shadow-lg hover:border-primary/50",
                      social.color,
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-700 delay-400",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            {...field}
                            className="px-4 py-3 rounded-xl bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            className="px-4 py-3 rounded-xl bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            rows={6}
                            {...field}
                            className="px-4 py-3 rounded-xl bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {form.formState.isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-muted-foreground">
                    Your information is safe and will never be shared with third
                    parties.
                  </p>
                </form>
              </Form>
            </div>
          </div>
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

        {/* Decorative Element */}
        <div className="hidden lg:block mt-20 ">
          <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-chart-1/20 to-chart-2/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">
                  Ready to collaborate?
                </p>
                <p className="text-sm text-muted-foreground">
                  Let&apos;s create something amazing together
                </p>
              </div>
            </div>
          </div>
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
