import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

export default function page() {
    return (
    <div className='text-lg bg-[#00122e]'>
        <div className='mx-auto text-center flex bg-red flex-col items-center overflow-hidden'>
        <div className=" mt-4  flex flex-row justify-center">
        <p className="text-2xl text-white font-semibold ">Saksham Playground : Let's make learning fun </p>
      </div>
        <div>
      
      <iframe
        src="https://monumental-pavlova-8b3a3d.netlify.app/"
        title="Saksham Practice Playground"
  
        className='w-screen h-screen'
        allow="camera; microphone"
      ></iframe>
    </div>
        </div>
    </div>
  )
}