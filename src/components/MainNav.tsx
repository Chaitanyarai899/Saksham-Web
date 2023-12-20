"use client"
import Image from "next/image";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

function MainNav() {
  return (
  <div className="flex flex-row xnm:flex-col xnm:text-center  ">
   
    <div className="flex-grow xsml:mx-2 flex items-center justify-center cursor-pointer">
      <div className="bg-transparent w-fit xsms:h-[5vh] h-[8vh] rounded-full border-1 flex flex-row border-black items-center">
       
        <div className="text-lg xsms:text-base p-2 font-mono xsssm:py-1 xsssm:text-sm  font-medium mlg:text-base">
          <ul className="flex flex-row justify-around">
          {typeof localStorage !== 'undefined' && localStorage.getItem('lang') && (
                <Link href="/">
                  <li className="px-3">
                    {localStorage.getItem('lang') === 'english'
                      ? 'Home'
                      : 'होम'}
                  </li>
                </Link>
              )}
           {typeof localStorage !== 'undefined' && localStorage.getItem('lang') && (
            <Link href="/schemes">
              <li className="px-3">
                {localStorage.getItem('lang') === 'english'
                  ? 'Schemes'
                  : 'योजनाएँ'}
              </li>
            </Link>
          )}
          {typeof localStorage !== 'undefined' && localStorage.getItem('lang') && (
          <Link href="/braille/orbitwriter">
            <li className="px-3">
              {localStorage.getItem('lang') === 'english'
                ? 'Orbit-Writer'
                : 'ऑर्बिट राइटर'}
            </li>
          </Link>
        )} 
        {typeof localStorage !== 'undefined' && localStorage.getItem('lang') && (
        <Link href="https://6582dc39b2a7d706984e8d7d--cool-bublanina-4c0c2c.netlify.app/">
          <li className="px-3">
            {localStorage.getItem('lang') === 'english'
              ? 'Playground'
              : 'प्लेग्राउंड'}
          </li>
        </Link>
      )}
      {typeof localStorage !== 'undefined' && localStorage.getItem('lang') && (
        <Link href="/education">
          <li className="px-3">
            {localStorage.getItem('lang') === 'english'
              ? 'Education'
              : 'शिक्षा'}
          </li>
        </Link>
      )}

          </ul>
         </div>
      </div>
    </div>

  </div>


  );
}

export default MainNav;