import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 
    backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between ">
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
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
