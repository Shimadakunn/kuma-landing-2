
  import Image from "next/image"
  export default function Faq() {
    return (
  
        <section className=" dark:bg-darkBg bg-bg pt-14 pb-10 font-base lg:pt-[100px] lg:pb-[50px] border-b-4 border-black">
          <h2 className=" text-center text-3xl font-heading md:text-3xl mb-10 lg:text-5xl">
            Application
          </h2>
  
          <Image src="/screen.png" alt="screenshot" width={1000} height={1000} className="mx-auto w-[90vw] sm:w-[50vw] "/>
        </section>
  
    )
  }
  