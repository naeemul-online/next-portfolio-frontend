"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "relative rounded-full border-border/50 hover:border-primary/50 transition-all duration-300",
            "hover:bg-primary/10 hover:scale-110 hover:shadow-lg hover:shadow-primary/20",
            "group overflow-hidden"
          )}
        >
          <Menu className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />

          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-75" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-xl border-l border-border/50"
      >
        {/* Header with Logo */}
        <SheetHeader className="border-b border-border/50 pb-6 mb-6">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            {/* Close button with animation */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-all duration-300 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        {/* Navigation Menu */}
        <div className="flex flex-col gap-6">
          <NavMenu
            orientation="vertical"
            className="w-full"
            onClick={() => setOpen(false)}
          />

          {/* Decorative Divider */}
          <div className="flex items-center gap-3 py-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <Sparkles className="w-4 h-4 text-primary" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Additional Info */}
          <div className="mt-auto pt-6 space-y-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-chart-1/5 to-chart-2/10 border border-border/50">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Quick Links
              </h4>
              <p className="text-sm text-muted-foreground">
                Navigate through the menu to explore all sections of the
                portfolio.
              </p>
            </div>

            {/* Social Links or Version Info */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Made with <span className="text-primary">❤</span> by{" "}
                <span className="font-semibold">Naeemul Islam</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-chart-1/5 rounded-full blur-3xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
