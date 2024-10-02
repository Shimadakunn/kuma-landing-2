import PricingPlan from '@/components/pricing-plan'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
export default function CallToAction() {
  return (
    <section className="border-b-border text-black inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-6 text-center text-2xl font-heading md:text-3xl lg:mb-10 lg:text-4xl">
          Step into the future of DeFi
        </h2>
        <div className='mx-auto w-full flex justify-center'>
        <Button className='text-2xl sm:text-3xl px-14 sm:px-16 py-8 font-black'>
          <div>Download</div>
            <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-8 ml-2" />
        </Button>
        </div>
       
      </div>
    </section>
  )
}
