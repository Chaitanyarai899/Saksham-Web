import { Button } from "@/components/ui/button";
import { auth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MainNav from "./MainNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav
      className="sticky h-21 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 
    backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper className=" flex flex-row">
      <div className="vmd:hidden fixed left-2 top-3" >
          <DropdownMenu>
            <DropdownMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
<path d="M5,7h2h12c1.1,0,2-0.9,2-2s-0.9-2-2-2H7H5C3.9,3,3,3.9,3,5S3.9,7,5,7z"></path><path d="M19,10h-3H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h11h3c1.1,0,2-0.9,2-2S20.1,10,19,10z"></path><path d="M19,17h-6H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h8h6c1.1,0,2-0.9,2-2S20.1,17,19,17z"></path>
</svg></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hello There !</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>main</DropdownMenuItem>
              <DropdownMenuItem>main</DropdownMenuItem>
              <DropdownMenuItem>main</DropdownMenuItem>
              <DropdownMenuItem>main</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          '
        </div>
        '

        <div className="flex h-16 items-center justify-between pb-2">
        
          <Link href="/" className="flex z-40 ">
            <Image
              src="/sakshamlogo1.png"
              alt="Preview of video call feature"
              width={220}
              height={100}
              quality={100}
              className="rounded-md items-center "
            />
          </Link>
          <div className="space-x-4" id="auth-box">
            {!userId && (
              <>
                <Link href="/sign-in" className="font-mono">
                  <Button
                    variant="ghost"
                    className="border-rose-600 border-b-[4px] border-r-[4px] border-l-[2px] border-t-[2px] m-2 hover:border-r-[3px] hover:border-b-[3px] hover:bg-white"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up" className="font-mono">
                  <Button
                    variant="outline"
                    className="border-rose-600 border-b-[4px] border-r-[4px] border-l-[2px] border-t-[2px] m-2 hover:border-r-[3px] hover:border-b-[3px hover:bg-white"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            <div className="flex flex-row ">
              {userId && (
                <div className="pt-1 md:hidden pl-[17vw] xlg:pl-[13vw] xmd:pl-[7vw]">
                  <MainNav />
                </div>
              )}

              <div className=" top-3 mr-2  fixed right-5">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
