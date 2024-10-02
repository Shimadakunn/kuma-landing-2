import Protocols from '@/sections/protocols'
import Hero from '@/sections/hero'
import Video from '@/sections/video'
import Questions from '@/sections/questions'
import CallToAction from '@/sections/call-to-action'
import Footer from '@/components/footer'
import Marquee from '@/sections/marquee'
import Problematic from '@/sections/problematic'
import Solutions from '@/sections/solutions'
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee/>
      <Problematic/>
      <Solutions/>
      <Video />
      <Questions />
      <Marquee/>
      <CallToAction />
      <Footer />
    </>
  )
}
