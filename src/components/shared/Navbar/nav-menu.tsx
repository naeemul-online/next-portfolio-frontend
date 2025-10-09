"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { BookOpen, Home, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/blogs",
    label: "Blogs",
    icon: BookOpen,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
];

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-2 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-2 font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                    "hover:bg-primary/10 hover:text-primary",
                    "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  {/* Icon */}
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      "group-hover:scale-110 group-hover:rotate-3"
                    )}
                  />

                  {/* Label */}
                  <span className="relative">
                    {item.label}

                    {/* Active indicator underline */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-chart-1 rounded-full transition-all duration-300",
                        isActive
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      )}
                    />
                  </span>

                  {/* Hover glow effect */}
                  <span
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full bg-primary/10 blur-md transition-opacity duration-300",
                      "opacity-0 group-hover:opacity-100"
                    )}
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
