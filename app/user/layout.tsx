import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/shared/header/menu";
import MainNav from "./main-nav";
import Footer from "@/components/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <header className="w-full border-b">
        <div className="wrapper flex h-16 items-center gap-6">
          <div className="flex-start">
            <Link href="/" className="flex-start">
              <Image
                src="/img/footer_logo_icon.png"
                alt={APP_NAME}
                width={63}
                height={63}
                sizes="100vw"
                className="hidden lg:block mr-2"
              />
              <Image
                src="/img/logo.png"
                alt={APP_NAME}
                width={99}
                height={20}
                sizes="100vw"
                className="mr-2"
              />
            </Link>
          </div>
          <MainNav />
          <div className="ml-auto">
            <Menu />
          </div>
        </div>
      </header>
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
