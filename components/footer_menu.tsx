import Link from "next/link";

type FooterMenuProps = {
  orientation?: "horizontal" | "vertical";
};

const FooterMenu = ({ orientation = "horizontal" }: FooterMenuProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={
        orientation === "vertical"
          ? "flex flex-col gap-3"
          : "flex flex-wrap items-center gap-4"
      }
    >
      <Link href="/" className="text-primary font-semibold hover:underline">
        Home
      </Link>
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
      <Link
        href="/contact"
        className="text-primary font-semibold hover:underline"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default FooterMenu;
