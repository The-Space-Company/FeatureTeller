import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { getPageOptions } from "@/config/pages";
import { headers } from "next/headers";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
