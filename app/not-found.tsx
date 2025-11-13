"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button variant="outline" className="mt-4 ml-2" asChild>
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
