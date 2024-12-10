"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
 <header className=" inset-0 flex h-[100dvh] w-full items-center justify-around bg-bg relative">

 <div className='absolute right-1/2 top-8 translate-x-1/2 flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-12 w-12 mr-1'/>
   <div className='text-6xl font-black [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]'>
     Kuma
   </div>
 </div>

 <div className='w-[40%] flex items-center justify-center h-full'>
 <Image src={"/ill.svg"} alt="logo" width={100} height={100} className="w-[75%]" />
 </div>


 <div className='mt-44 px-16 mr-16'>
   <div className='text-6xl leading-none mb-4 text-[#DBCAF4]'>
   The <span className='text-white'>app</span> that made you <br /> <span className='font-black text-red-400 '>Love</span> <span className='font-black text-white [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]'>Saving Money</span>
   </div>
   <div className='text-3xl text-[1.5rem] text-black mb-20'>
   Put your idle money to work with decentralized finance.
   </div>
   <div className='flex justify-center'>
   <Button className='text-3xl px-16 py-8 font-black'>
       <div>Download App</div>
         <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 w-8 ml-2" />
     </Button>
   </div>
   <div className="flex justify-center items-center text-2xl font-black mt-8">
          <Image src="/ethglobal.svg" alt="ethglobal" width={100} height={100} className="mr-2 w-8"/>
          <div>ETH<span className="font-normal">Global</span> <span className="font-light text-gray-200">Online 2024</span> <span className="text-yellow-400 font-black">Winner</span></div>
          <Image src="/medal.svg" alt="medal" width={100} height={100} className="ml-1 w-5 "/>
          </div>
  
 </div>

</header>
    ) : (
      <header className=" inset-0 flex flex-col h-[95vh] w-full items-center justify-center bg-bg relative space-y-2">

 <div className='absolute left-4 top-6 flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-8 w-8 mr-1'/>
   <div className='text-4xl text-[2.5rem] font-black [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]'>
   Kuma
   </div>
 </div>

 <Image src={"/ill.svg"} alt="logo" width={100} height={100} className="w-[60%] " />

 <div className='w-full text-center'>
   <div className='text-3xl text-[#DBCAF4]'>
   The <span className='text-white'>wallet</span> that made you <br /> <span className='font-black text-red-400 '>Love</span> <span className='font-black text-white [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]'>Saving Money</span>
   </div>
   <div className='text-sm text-black mb-6'>
   Put your idle money to work with decentralized finance.
   </div>
   <div className='w-full'>
    <Button className=' text-2xl w-[85vw] py-8 font-black flex items-center justify-center mx-auto'>
       <div>Download App</div>
         <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 ml-2 w-8" />
     </Button>
   </div>
   
    
 </div>
 <div className="flex justify-center items-center text-xl font-black absolute bottom-4">
          <Image src="/ethglobal.svg" alt="ethglobal" width={100} height={100} className="mr-2 w-6"/>
          <div>ETH<span className="font-normal">Global</span> <span className="font-light text-gray-200">Online 2024</span> <span className="text-yellow-400 font-black">Winner</span></div>
          <Image src="/medal.svg" alt="medal" width={100} height={100} className="ml-1 w-4 "/>
          </div>
 </header>
    )}
    </>
   
  )
}
