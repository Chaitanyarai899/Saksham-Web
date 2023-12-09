import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { auth, UserButton } from "@clerk/nextjs";


const Navbar = () => {
  const { userId } = auth();


  return (
    <nav
      className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 
    backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between pb-2">
          <Link href="/" className="flex z-40 ">
           <Image
                    src="/sakshamlogo1.png"
                    alt="Preview of video call feature"
                    width={200}
                    height={40}
                    quality={100}
                    className="rounded-md"
                  />
          </Link>
        <div className="space-x-4" id="auth-box">
          {!userId && (
            <>
              <Link href="/sign-in" className="font-mono">
                <Button variant="ghost" className="border-rose-600 border-b-[4px] border-r-[4px] border-l-[2px] border-t-[2px] m-2 hover:border-r-[3px] hover:border-b-[3px] hover:bg-white">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" className="font-mono">
                <Button variant="outline" className="border-rose-600 border-b-[4px] border-r-[4px] border-l-[2px] border-t-[2px] m-2 hover:border-r-[3px] hover:border-b-[3px hover:bg-white">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
