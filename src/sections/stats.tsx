"use client"

export default function Stats() {
  return (
    <section className="border-b-border inset-0 flex w-full flex-col items-center justify-center border-b-4 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full lg:px-5 py-20 lg:py-[100px]">
        {/* <div className="flex items-center justify-center">
          <Image src={"/aave.png"} alt="logo" width={1000} height={1000} className=" ml-2 w-[20rem]" />
        </div> */}
        {/* <div className="flex items-center justify-center mt-1 mb-10" onClick={() => window.open('https://aave.com', '_blank')}>
        <h2 className="text-center text-xl font-heading text-black" >
            Lending infrastructure
          </h2>
          <ExternalLink className="w-4 h-4 ml-1 mt-[2px]" color="black" strokeWidth={2.5} />
        </div> */}
         

        <div className="flex items-center justify-center w-full ">
          <div className="w-1/3">
            <h2 className="text-center text-3xl lg:text-6xl font-heading text-black">
              $284.56M 
            </h2>
            <h2 className="text-center text-xs lg:text-xl font-heading text-black">
              Total deposited

            </h2>
          </div>

          <div className="w-1/3">
            <h2 className="text-center lg:text-6xl text-3xl font-heading text-black">
              $125K  
            </h2>
            <h2 className="text-center text-xs lg:text-xl font-heading text-black">
              Spent on security audits
            </h2>
          </div>

          <div className="w-1/3">
            <h2 className="text-center lg:text-6xl text-3xl font-heading text-black">
              10%
            </h2>
            <h2 className="text-center text-xs lg:text-xl font-heading text-black">
              Avg interest over last year
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
