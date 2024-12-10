"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
const features = [
  {
    title: 'Lend and Earn',
    text: 'Lend your dollars on the blockchain, earn interests on what you have lent.',
  },
  {
    title: 'High Interests',
    text: 'No intermediaries means better interests and more control over your money.',
  },
  {
    title: 'Stable',
    text: 'Stocks, Bonds and Crypto are volatile. Dollar is stable.',
  },
  {
    title: 'Simple and Secure',
    text: 'Your money is yours. Nobody can access it. Retire your dollars anytime.',
  },
  
]
export default function Solution() {
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
      <section className=" bg-bg pt-16 font-base lg:pt-[100px] border-b-border border-b-4 flex items-center justify-around flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:w-[60%] w-[90%] lg:ml-16 lg:mb-24 gap-4">
          <h2 className="text-5xl font-black mb-4">
            {isMobile ? (
              <div className="text-center">
                Dont <span className='font-black text-red-400'>worry!</span> <br /> <span className='font-black text-white [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]'>We got you.</span>
              </div>
            ) : (
              <div className="text-center">
                Dont <span className='font-black text-red-400'>worry!</span> <span className='font-black text-white [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]'>We got you.</span>
              </div>
            )}
          </h2>
          <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 lg:grid-cols-2 ">
            {features.map((feature, i) => {
            return (
              <div
                className="border-border shadow-light flex flex-col gap-3 rounded-base border-2 bg-white p-4 text-black"
                key={i}
              >
                <div className="flex items-center space-x-2">
                <Image
                src={`/shapes/${i + 1}.svg`}
                alt={`${i + 1}`}
                width={100}
                height={100}
                className="w-10 h-10"
                />
                <h4 className="text-3xl font-heading ">
                  {feature.title}
                </h4>
                </div>
                
                <p >{feature.text}</p>
              </div>
            )
            })}
          </div>
        </div>
        <div className="flex items-end justify-center lg:w-[30%] w-[90%] lg:mt-0 mt-16">
          <Image src="/screens.png" alt="logo" width={3000} height={3000} className="" />
        </div>
      </section>
  )
}
