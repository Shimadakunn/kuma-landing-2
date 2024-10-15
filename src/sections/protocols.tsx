import { SignalLow, SignalMedium, SignalHigh } from 'lucide-react';
import Image from 'next/image';
const protocols = [
  [
    {
      name: 'Aave',
      risk: 'Low Risk',
      description: 'Aave is a decentralized finance (DeFi) platform that allows users to lend and borrow cryptocurrencies.',
      logo: '/protocols/aave.svg',
    },
    
    {
      name: 'Tokemak',
      risk: 'High Risk',
      description: 'Tokemak is a protocol for restaking Ethereum rewards.',
      logo: '/protocols/tokemak.svg',
    },
  ],
  [
    {
      name: 'Lido',
      risk: 'Low Risk',
      description: 'Lido allows liquid staking of Ethereum, providing a way for users to earn staking rewards while maintaining their Ethereum tokens in their own wallets.',
      logo: '/protocols/lido.svg',
    },
    {
      name: 'Curve',
      risk: 'Medium Risk',
      description: 'Curve Finance is a decentralized exchange (DEX) of liquidity pools for stablecoins.',
      logo: '/protocols/curve.png',
    },
    {
      name: 'Uniswap',
      risk: 'Medium Risk',
      description: 'Uniswap is a decentralized exchange (DEX) that allows users to trade cryptocurrencies.',
      logo: '/protocols/uniswap.svg',
    },
    
   
  ],
  [
    {
      name: 'EigenLayer',
      risk: 'High Risk',
      description: 'EigenLayer enables staked ETH to be used as cryptoeconomic security for protocols other than Ethereum, in exchange for protocol fees and rewards.',
      logo: '/protocols/eigenlayer.png',
    },
    {
      name: 'Jupiter',
      risk: 'High Risk',
      description: 'Jupiter is a decentralized exchange (DEX) that allows users to trade cryptocurrencies on the Solana blockchain.',
      logo: '/protocols/jupiter.svg',
    },
  ],
]

export default function Protocols() {

  return (
    <section className="border-b-border inset-0 flex w-full flex-col items-center justify-center border-b-4 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
      <h2 className="mb-10 text-center text-3xl text-[1.75rem] font-heading md:text-3xl lg:mb-15 lg:text-5xl text-black">
          DeFi protocols
        </h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 w900:grid-cols-1 w900:gap-0">
          {protocols.map((column, columnIndex) => (
            <div className="group flex flex-col justify-center" key={columnIndex}>
              {column.map((card, cardIndex) => (
                <div
                  className="border-border dark:border-darkBorder shadow-light dark:shadow-dark dark:bg-darkBg mb-4 min-h-48 w-full rounded-base border-2 bg-bg p-5 lg:mb-8 w900:mx-auto w900:min-h-20 w900:w-2/3 w500:w-full"
                  key={cardIndex}
                >
                  <div className="flex items-center gap-5">
                    <Image

                      width={100}
                      height={100}
                      className="h-12 w-12 rounded-base"
                      src={card.logo}
                      alt="Defi Protocol"
                    />

                    <div>
                      <h4 className="text-lg font-heading">{card.name}</h4>
                      <p className="text-sm font-base">{card.risk}</p>
                    </div>
                  </div>
                  <div className="mt-5">{card.description}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}