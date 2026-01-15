import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col gap-3 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          {currentYear} {APP_NAME}. All Rights Reserved
        </div>
        <div className="flex gap-4">
          <Link
            href="/locations"
            className="text-primary font-semibold hover:underline"
          >
            Locations
          </Link>
          <Link
            href="/videos"
            className="text-primary font-semibold hover:underline"
          >
            Videos
          </Link>
          <Link
            href="/about"
            className="text-primary font-semibold hover:underline"
          >
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
