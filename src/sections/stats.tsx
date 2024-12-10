import Image from "next/image";

export default function Stats() {
  return (
    <section className="border-b-border inset-0 flex w-full flex-col items-center justify-center border-b-4 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <div className="flex items-center justify-center">
          <Image src={"/aave.png"} alt="logo" width={1000} height={1000} className=" ml-2 w-[20rem]" />
        </div>
        <h2 className="text-center text-xl font-heading text-black mt-1 mb-10">
          Lending Pool
        </h2>

        <div className="flex items-center justify-center w-full">
          <div className="w-1/2">
            <h2 className="text-center text-6xl font-heading text-black">
              $285M  
            </h2>
            <h2 className="text-center text-xl font-heading text-black">
              Total Supplied 
            </h2>
          </div>

          <div className="w-1/2">
            <h2 className="text-center text-6xl font-heading text-black">
              7.5%
            </h2>
            <h2 className="text-center text-xl font-heading text-black">
              Avg APY over last year
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
