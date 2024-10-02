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

 <div className='absolute right-1/2 top-8 translate-x-1/2 flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-12 w-12 mr-1'/>
   <div className='text-6xl font-black '>
     Kuma
   </div>
 </div>

 <Image src={"/ill.svg"} alt="logo" width={100} height={100} className="h-[95%] w-1/2" />

 <div className='w-full mt-44'>
   <div className='text-6xl leading-none mb-4 text-[#DBCAF4]'>
   The <span className='text-white'>wallet</span> that made you <br /> <span className='font-black text-red-400 '>Love</span> <span className='font-black text-white'>Blockchain</span>
   </div>
   <div className='text-3xl text-[1.5rem] text-black mb-24'>
   Easy to use, own crypto on-chain, earn high-yield
   </div>
   <div className='w-[90%] flex justify-center'>
   <Button className='text-3xl px-16 py-8 font-black'>
       <div>Download App</div>
         <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 w-8 ml-2" />
     </Button>
   </div>
    
 </div>

</header>
    ) : (
      <header className=" inset-0 flex flex-col h-[100dvh] w-full items-center justify-center bg-bg relative space-y-10">

 <div className='absolute left-4 top-6 flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-8 w-8 mr-1'/>
   <div className='text-4xl text-[2.5rem] font-black '>
     Kuma
   </div>
 </div>

 <Image src={"/ill.svg"} alt="logo" width={100} height={100} className="w-[70%] " />

 <div className='w-full text-center'>
   <div className='text-3xl text-[#DBCAF4] mb-2'>
   The <span className='text-white'>wallet</span> that made you <br /> <span className='font-black text-red-400 '>Love</span> <span className='font-black text-white'>Blockchain</span>
   </div>
   <div className='text-sm text-black mb-4'>
   Easy to use, own crypto on-chain, earn high-yield
   </div>
   <div className='w-full'>
    <Button className=' text-2xl w-[85vw] py-8 font-black flex items-center justify-center mx-auto'>
       <div>Download App</div>
         <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 ml-2 w-8" />
     </Button>
   </div>
    
 </div>
 </header>
    )}
    </>
   
  )
}
