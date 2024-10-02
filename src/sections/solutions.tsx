import Image from "next/image"

const features = [
  {
    title: 'Use Passkeys ',
    text: 'Use biometrics as private keys. No more passwords, just use your fingerprint or face.',
  },
  {
    title: 'Pay gas in USDC',
    text: 'Take control over your fees. Top up your gas tank with USDC and you are ready to go.',
  },
  {
    title: 'User Friendly',
    text: 'Have an experience similar to an E-Banking App. Easy to use and to maximize profits.',
  },
  {
    title: 'Earn Yield',
    text: 'Fructify your assets with the best yield farming opportunities in the defi space.',
  },
  {
    title: 'Omnichain',
    text: 'Navigate between chains with ease. Stop loosing time managing multiple wallets.',
  },
  {
    title: 'Secure',
    text: 'Your crypto are yours. Nobody can access your assets.',
  },
]

export default function Solutions() {

  return (
      <section className=" bg-bg py-16 font-base lg:py-[100px] border-b-border border-b-4">
        <h2 className="mb-10 px-5 text-center text-4xl text-[2.75rem] font-heading md:text-3xl lg:mb-15 lg:text-5xl">
          Solutions
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="border-border shadow-light flex flex-col gap-3 rounded-base border-2 bg-white px-5 py-7 text-black"
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
                <h4 className="text-3xl font-heading">
                  {feature.title}
                </h4>
                </div>
                

                
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
  )
}
