import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  return (

      <section className="dark:bg-darkBg bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-10 text-center text-2xl font-heading md:text-3xl lg:mb-15 lg:text-5xl [text-shadow:_-1.75px_-1.75px_0_#000,_1.75px_-1.75px_0_#000,_-1.75px_1.75px_0_#000,_1.75px_1.75px_0_#000]">
          Frequently asked questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-4">
              <AccordionTrigger>Can I withdraw my assets anytime?</AccordionTrigger>
              <AccordionContent>
              Yes! You can withdraw your assets anytime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>Where does the yield come from?</AccordionTrigger>
              <AccordionContent>
                The yield comes from the interest that borrowers pay. 
                To borrow money, borrowers need to put as collateral more value than the amount they want to borrow.
                Then when the borrower returns the money, he pays interest.
                You will receive that interest as reward.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>What if the borrower defaults?</AccordionTrigger>
              <AccordionContent>
                If the borrower defaults, he will lose his collateral that you will receive as compensation.
              </AccordionContent>
            </AccordionItem>   
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>Who controls the assets?</AccordionTrigger>
              <AccordionContent>
                You! You are the only owner of your assets. You can access from any device with passkey feature.
                Connect with AppleID, Google Authentificator or your own Passwords Manager.
              </AccordionContent>
            </AccordionItem>       
            <AccordionItem value="item-5">
              <AccordionTrigger>How to recover my account?</AccordionTrigger>
              <AccordionContent>
                If you lost your account, you can recover it by using the passkey feature.
                Recover your passkey provider and access your account from any device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

  )
}
