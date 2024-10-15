import Marquee from 'react-fast-marquee'
import Image from 'next/image'


  const LayerZero = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/layerzero.svg" alt="layerzero" width={100} height={100} className='w-10 h-10'/>
        <span className="text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8">
                   LayerZero.
                  </span>
      </div>
     
    )
  }

  const Arbitrum = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/arbitrum.svg" alt="arbitrum" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8">
        Arbitrum
                  </span>
      </div>
     
    )
  }

  const Avalanche = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/avalanche.svg" alt="avalanche" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8">
        Avalanche
                  </span>
      </div>
     
    )
  }

  const Optimism = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/optimism.svg" alt="optimism" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8">
        Optimism
                  </span>
      </div>
     
    )
  }

  const Solana = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/solana.svg" alt="solana" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8">
        Solana
                  </span>
      </div>
     
    )
  }

  const Bitcoin = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/bitcoin.svg" alt="bitcoin" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8 ">
        Bitcoin
                  </span>
      </div>
     
    )
  }

  const Polygon = () => {
    return (
      <div className="flex items-center">
        <Image src="/logos/polygon.svg" alt="polygon" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8 ">
        Polygon
                  </span>
      </div>
     
    )
  }

  const Ethglobal = () => {
    return (
      <div className="flex items-center">
        <Image src="/ethglobal2.svg" alt="ethglobal" width={100} height={100} className='w-10 h-10'/>
        <span className="ml-2 text-2xl font-heading sm:text-2xl lg:text-4xl mr-6 sm:mr-8 ">
        ETHGlobal
                  </span>
      </div>
     
    )
  }


export  const Marque = () => {
    return (
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-darkBg border-y-4 bg-white py-3 font-base sm:py-5 text-black"
          direction="right"
        >
        
        
         <LayerZero />
         {/* <Polygon />
         <Avalanche /> */}
         <Optimism />
                <Arbitrum />
                <Ethglobal />
                <LayerZero />
         {/* <Polygon />
         <Avalanche /> */}
         <Optimism />
                <Arbitrum />
                <Ethglobal />
                
                
                
                {/* <Solana />
                <Bitcoin /> */}
        </Marquee>
    )
}

export default Marque