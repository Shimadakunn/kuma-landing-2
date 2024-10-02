import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  return (

      <section className=" dark:bg-darkBg bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-10 text-center text-3xl text-[1.75rem] font-heading md:text-3xl lg:mb-15 lg:text-5xl">
          Frequently asked questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>Who controls the crypto?</AccordionTrigger>
              <AccordionContent>
                You are the only owner of your crypto. You can access from any device with passkey feature.
                Connect with AppleID, Google Authentificator or your own Passwords Manager.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>Where are the yield comes from?</AccordionTrigger>
              <AccordionContent>
                The yield comes from different DeFi protocols. When you stake your crypto, you are lending it to the other users who borrow it.
                You will receive a reward for lending your crypto. You are also contributing to the security of the network.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>Is it safe?</AccordionTrigger>
              <AccordionContent>
              We are working with the best protocols to ensure the best yield for you.
              All the yield farming pools are carefully selected to ensure the best yield for you.
              You can withdraw your crypto at any time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How to recover my wallet?</AccordionTrigger>
              <AccordionContent>
                If you lost your wallet, you can recover it by using the passkey feature.
                Recover your passkey provider and access your wallet from any device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

  )
}
