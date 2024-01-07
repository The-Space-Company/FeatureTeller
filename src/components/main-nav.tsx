"use client";

import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@/types";
import { MobileNav } from "./mobile-nav";
import { siteConfig } from "@/config/site";
import { XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AuthStateButton } from "./auth/auth-state-button";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user?: {
    email: string;
  };
}

export function MainNav({ items, children, user }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex w-full gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        {/* <Icons.logo /> */}
        <span className="font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>

      <div className="flex-1">
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <XIcon /> : <div></div>}
        <span className="font-bold">Menu</span>
      </button>
      <AuthStateButton user={user} />

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
