import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { getServerAuthSession } from "@/server/auth";
import { getSession } from "next-auth/react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await getServerAuthSession();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 bg-background">
        <header className="container z-40 max-w-3xl  px-4 py-4">
          <div className="flex items-center justify-between">
            <MainNav
              items={[]}
              user={session?.user && { email: session.user.email || "-" }}
            />
            {/* <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4",
              )}
            >
              Login
            </Link>
          </nav> */}
          </div>
        </header>
      </div>

      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
