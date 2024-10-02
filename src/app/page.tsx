import Protocols from '@/sections/protocols'
import Features from '@/sections/features'
import Hero from '@/sections/hero'
import Video from '@/sections/video'
import Questions from '@/sections/questions'
import CallToAction from '@/sections/call-to-action'
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
      <CallToAction />
      <Footer />
    </>
  )
}
