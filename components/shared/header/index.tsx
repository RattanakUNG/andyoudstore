import { ShoppingCart, UsbIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex h-16 items-center justify-between">
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
            {/* <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span> */}
          </Link>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
