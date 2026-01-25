import { APP_NAME } from "@/lib/constants";
import FooterMenu from "./footer_menu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col gap-3 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          {currentYear} {APP_NAME}. All Rights Reserved
        </div>
        <FooterMenu />
      </div>
    </footer>
  );
};

export default Footer;
