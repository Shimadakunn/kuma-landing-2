"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function Problematic() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };
    checkIfMobile();
    console.log(isMobile);
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <section className="border-b-border inset-0 flex w-full flex-col items-center justify-center border-b-4 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base relative">
     
     <div className='absolute top-4 right-4 text-black flex items-center gap-1 font-normal sm:font-semibold'>
        Featured by
        <Image src={"/arrow.svg"} alt="logo" width={100} height={100} className="w-10 " />
        
     </div>
      <div className="mx-auto w-container max-w-full px-4 py-20 lg:py-[100px]">
        <h2 className="text-4xl font-normal lg:mb-15 lg:text-5xl text-black text-left sm:text-center">
          {isMobile ? (
            <>
              <span className='font-black'>Investing</span> is <span className='font-black text-red-500'>scary</span>.
              <div className='mt-4'><span className='font-black'>Where</span> to start?</div>
              <div className='mt-1'><span className='font-black'>How</span> to invest?</div>
              <div className='mt-1'>What if I <span className='font-black text-red-500'>lose </span> my <span className='font-black'>money</span>?</div>
            </>
          ) : (
            <>
              <span className='font-black'>Investing</span> is <span className='font-black text-red-500'>scary</span>.
              <div className='mt-4'><span className='font-black'>Where</span> to start, <span className='font-black'>How</span> to invest?</div>
              <div className='mt-1'>What if I <span className='font-black text-red-500'>lose </span>all my <span className='font-black'>money</span>?</div>
            </>
          )}
        </h2>
      </div>
    </section>
  )
}
