import Protocols from '@/sections/protocols'
import Features from '@/sections/features'
import Hero from '@/sections/hero'
import Video from '@/sections/video'
import Questions from '@/sections/questions'
import Pricing from '@/sections/pricing'
import Footer from '@/components/footer'
import Marquee from '@/sections/marquee'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee/>
      <Video />
      <Features />
      <Marquee/>
      <Protocols />
      <Questions />
      <Marquee/>
      <Pricing />
      <Footer />
    </>
  )
}
