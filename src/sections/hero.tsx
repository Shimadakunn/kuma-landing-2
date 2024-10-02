"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Hero() {
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
    <>
    {!isMobile ? (
 <header className=" inset-0 flex h-[100dvh] w-full items-center justify-center bg-bg relative">

 <div className='absolute right-1/2 top-10 translate-x-1/2 flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-12 w-12 mr-4'/>
   <div className='text-6xl font-black '>
     Kuma
   </div>
 </div>

 <Image src={"/ill.svg"} alt="logo" width={100} height={100} className="h-[95%] w-1/2" />

 <div className='w-full mt-32'>
   <div className='text-[3rem] leading-none font-bold mb-4'>
     Unlock the <br /> Future of Decentralized Finance
   </div>
   <div className='text-3xl text-black mb-24'>
     Access high yields without the crypto complexity
   </div>
   <div className='w-full flex justify-center'>
   <Button className=' text-3xl px-16 py-8 font-black'>
       <div>Download App</div>
         <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 w-full ml-2" />
     </Button>
   </div>
    
 </div>

</header>
    ) : (
      <header className=" inset-0 flex flex-col h-[100dvh] w-full items-center justify-center bg-bg relative space-y-4">

 <div className='absolute left-4 top-6 flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-10 w-10 mr-1'/>
   <div className='text-5xl font-black '>
     Kuma
   </div>
 </div>

 <Image src={"/ill.svg"} alt="logo" width={100} height={100} className="w-[60%] pt-16" />

 <div className='w-full text-center'>
   <div className='text-3xl font-bold mb-2'>
     Unlock the Future of  <br /> Decentralized Finance
   </div>
   <div className='text-sm text-black mb-4'>
     Access high yields without the crypto complexity
   </div>
   <div className='w-full flex justify-center'>
   <Button className=' text-2xl px-14 py-8 font-black'>
       <div>Download App</div>
         <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 w-full ml-2" />
     </Button>
   </div>
    
 </div>
 </header>
    )}
    </>
   
  )
}
