import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";

const Header = async () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex h-16 items-center justify-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href="/" className="flex-start ml-4">
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
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
