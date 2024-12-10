import Footer from '@/components/footer'
import CallToAction from '@/sections/call-to-action'
import Hero from '@/sections/hero'
import Marquee from '@/sections/marquee'
import Problematic from '@/sections/problematic'
import Questions from '@/sections/questions'
import Solution from '@/sections/solution'
import Stats from '@/sections/stats'
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee/>
      <Problematic/>
      <Solution/>
      <Stats />
      {/* <Solutions/> */}
      {/* <Screens/> */}
      {/* <Protocols/> */}
      <Questions />
      <Marquee/>
      <CallToAction />
      <Footer />
    </>
  )
}
