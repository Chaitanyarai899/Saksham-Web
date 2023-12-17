"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function braille() {
  return (
    <div>
      <div className=" mt-4  flex flex-row justify-center">
        <p className="text-2xl font-semibold font-serif">
          Braille and Its working
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row-reverse">
          <div className="w-[55%]">
            <div className="py-auto px-auto my-auto flex flex-col ">
              <div className="py-auto px-auto mr-7 mt-[17vh] mb-[3vh] text-lg font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">
              Imagine being able to read with your fingertips instead of your eyes! That's what Braille does—it's 
              a special way for people who can't see to read and write. It's made up of tiny bumps on paper that 
              form different patterns. Each pattern stands for a letter, a number, or even a whole word.
               So, when someone runs their fingers over these bumps, they can "read" the message and know what it says.               
        
              </div>
              <div>
                <Button>
                    Read more about braille here
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <div className="flex flex-row justify-center my-13">
              <div className="flex flex-col">
                <Image
                  src="/saksham2.png"
                  alt="Preview of video call feature"
                  width={500}
                  height={30}
                  quality={100}
                  className="rounded-md items-center "
                />
                
              
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default braille;
