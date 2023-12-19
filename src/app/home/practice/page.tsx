import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

export default function page() {
    return (
    <MaxWidthWrapper className='w-full'>
        <div className='py-20 mx-auto text-center flex bg-red flex-col items-center'>
        <div>
      <h1>Embedded Saksham Practice Playground</h1>
      <iframe
        src="https://sakshampracticeplayground.netlify.app/"
        title="Saksham Practice Playground"
        width="1000vw"
        height="600px"
        allow="camera; microphone"
      ></iframe>
    </div>
        </div>
    </MaxWidthWrapper>
  )
}