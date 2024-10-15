"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from 'react';
export default function CallToAction() {
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
    <section className="border-b-border text-black inset-0 flex w-full flex-col items-center justify-center border-b-4 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-4 py-20 lg:py-[100px]">
        <h2 className="mb-6 text-center text-2xl md:text-3xl lg:mb-10 lg:text-4xl">
          {
            isMobile ? (
              <>
              Step into the <br/> <span className='font-black'>Future</span> of  <span className='font-black'>Finance</span>
              </>
            ) : (
              <>
              Step into the <span className='font-black'>Future</span> of <span className='font-black'>Finance</span>
              </>
            )
          }
          
        </h2>
        <div className='mx-auto w-full flex justify-center'>
          <Button className='text-2xl sm:text-3xl px-8 sm:px-16 py-8 font-black flex items-center w-[85vw] sm:w-auto'>
              <div>Download</div>
              <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 ml-2 w-8" />
          </Button>
        </div>
       
      </div>
    </section>
  )
}
