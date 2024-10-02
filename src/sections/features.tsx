import Image from "next/image"

const features = [
  {
    title: 'Omnichain',
    text: 'Navigate between chains with ease. Stop loosing time managing multiple wallets.',
  },
  {
    title: 'Gas in USDC',
    text: 'Take control of your gas fees with USDC. Top up your gas tank with USDC and you are ready to go.',
  },
  {
    title: 'Yield Farming',
    text: 'Access to the best yield farming opportunities in the defi space. Choose from a wide range of options and start earning today depending on your risk appetite.',
  },
  {
    title: 'Main Cryptos',
    text: 'BTC, ETH, USDC',
  },
  {
    title: 'User Friendly',
    text: 'Have an experience similar to an E-Banking App. Easy to use and to maximize profits.',
  },
  {
    title: 'Featured Chains',
    text: 'Avalanche, Ethereum, Polygon, Binance Smart Chain, Optimism, Arbitrum',
  },
]

export default function Features() {

  return (
      <section className=" bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-10 px-5 text-center text-3xl font-heading md:text-3xl lg:mb-15 lg:text-5xl">
          Enter the world of Defi
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {

            return (
              <div
                className="border-border shadow-light flex flex-col gap-3 rounded-base border-2 bg-white p-5 text-black"
                key={i}
              >
                <Image
                src={`/shapes/${i + 1}.svg`}
                alt={`${i + 1}`}
                width={100}
                height={100}
                className="w-12 h-12"
                />

                <h4 className="mt-2 text-xl font-heading">
                  {feature.title}
                </h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
  )
}
