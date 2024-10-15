
  import Image from "next/image"
  export default function Faq() {
    return (
  
        <section className=" dark:bg-darkBg bg-bg pt-14 pb-10 font-base lg:pt-[100px] lg:pb-[50px] border-b-4 border-black">
          <h2 className=" text-center text-3xl font-heading md:text-3xl mb-10 lg:text-5xl">
            Application
          </h2>
  
          <Image src="/screen.png" alt="screenshot" width={1000} height={1000} className="mx-auto w-[90vw] sm:w-[50vw] "/>

        <div className="mt-6">
        <div className="flex justify-center items-center text-base sm:text-2xl text-yellow-400">
          <Image src="/medal.svg" alt="medal" width={100} height={100} className="mr-1 w-4 sm:w-7 "/>
          Winner
          </div>
          <div className="flex justify-center items-center text-2xl sm:text-5xl font-black sm:mt-2">
          <Image src="/ethglobal.svg" alt="ethglobal" width={100} height={100} className="mr-2 sm:mr-3 w-16 sm:w-24"/>
          <div>ETH<span className="font-normal">Global</span> <br/> <span className="font-light text-gray-200">Online 2024</span></div>
          </div>
        </div>
        </section>
  
    )
  }
  