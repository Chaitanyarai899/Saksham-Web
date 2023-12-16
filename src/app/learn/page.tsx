import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
function learn() {
  return (
    <>
    <div className='p-2 '>
    <div className='flex flex-col justify-center mt-8'>
        <div className='font-semibold font-mono tracking-wide text-4xl text-center  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] my-auto'>It's not just about being Abled </div>
        <div className='font-semibold font-mono text-4xl mt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] text-center my-auto'>It's about being सaksham</div>
        
    </div>
    <div className='m-10 flex flex-row flex-wrap justify-center mx-auto '>
  <Card className="w-[21vw] m-4  ">
      <CardHeader>
        <CardTitle> <Image
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/alphabets-2862416-2390540.png?f=webp&w=256"
              alt="Preview of video call feature"
              width={120}
              height={100}
              quality={100}
              className="rounded-md mx-auto items-center "
            />
          </CardTitle>
        <CardDescription className='py-2 '> <span className='font-semibold text-black text-lg '>Alphabets : The first Letters</span></CardDescription>
      </CardHeader>
    </Card>
    <Card className="w-[21vw] m-4 ">
      <CardHeader>
        <CardTitle> <Image
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/numbers-16-742294.png?f=webp&w=256"
              alt="Preview of video call feature"
              width={120}
              height={100}
              quality={100}
              className="rounded-md mx-auto items-center "
            />
          </CardTitle>
          <CardDescription className='py-2'> <span className='font-semibold text-black text-lg '>Numbers : The first numbers</span></CardDescription>
      </CardHeader>
    </Card>
    <Card className="w-[21vw] m-4 ">
      <CardHeader>
        <CardTitle> <Image
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/objects-7491084-6382955.png?f=webp&w=256"
              alt="Preview of video call feature"
              width={120}
              height={100}
              quality={100}
              className="rounded-md mx-auto items-center "
            />
          </CardTitle>
          <CardDescription className='py-2'> <span className='font-semibold text-black text-lg '>Objects : The first Objects</span></CardDescription>
      </CardHeader>
    </Card>
    
 
    </div>
    <div className='m-10 flex flex-row flex-wrap justify-center mx-auto '>
    <Card className="w-[21vw] m-4 ">
      <CardHeader>
        <CardTitle> <Image
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/emotions-5347777-4467817.png?f=webp&w=256"
              alt="Preview of video call feature"
              width={120}
              height={100}
              quality={100}
              className="rounded-md mx-auto items-center "
            />
          </CardTitle>
          <CardDescription className='py-2'> <span className='font-semibold text-black text-lg '>Emotions : the Emotions</span></CardDescription>
      </CardHeader>
    </Card>
    <Card className="w-[21vw] m-4 ">
      <CardHeader>
        <CardTitle> <Image
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/days-6503034-5462334.png?f=webp&w=256"
              alt="Preview of video call feature"
              width={120}
              height={100}
              quality={100}
              className="rounded-md mx-auto items-center "
            />
          </CardTitle>
          <CardDescription className='py-2'> <span className='font-semibold text-black text-lg '>Days : The first Letters</span></CardDescription>
      </CardHeader>
    </Card>
    <Card className="w-[21vw] m-4 ">
      <CardHeader>
        <CardTitle> <Image
              src="https://cdn.iconscout.com/icon/free/png-512/free-animals-3706539-3089267.png?f=webp&w=256"
              alt="Preview of video call feature"
              width={120}
              height={100}
              quality={100}
              className="rounded-md mx-auto items-center "
            />
          </CardTitle>
          <CardDescription className='py-2'> <span className='font-semibold text-black text-lg '> Animals : The first Letters</span></CardDescription>
      </CardHeader>
    </Card>
    
 
    </div>
    </div>
    
   
    
    </>
)
}

export default learn