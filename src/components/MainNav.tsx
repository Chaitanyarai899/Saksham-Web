import Image from "next/image";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

function MainNav() {
  return (
  <div className="flex flex-row xnm:flex-col xnm:text-center  ">
   
    <div className="flex-grow xsml:mx-2 flex items-center justify-center cursor-pointer">
      <div className="bg-white w-fit xsms:h-[5vh] h-[8vh] rounded-full border-2 flex flex-row border-black items-center">
       
        <div className="text-lg xsms:text-base p-2 font-mono xsssm:py-1 xsssm:text-sm  font-medium mlg:text-base">
          <ul className="flex flex-row justify-around">
            <li className="px-3"> main </li>
            <li className="px-3"> main </li>
            <li className="px-3"> main </li>
            <li className="px-3"> main </li>

            <li className="px-3"> main </li>

          </ul>
         </div>
      </div>
    </div>

  </div>


  );
}

export default MainNav;