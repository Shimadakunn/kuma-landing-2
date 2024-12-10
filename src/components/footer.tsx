import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Send, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="m500:text-sm z-30 bg-white px-5 py-5 text-center font-base text-black flex items-center justify-between">
      <div className='flex items-center'>
   <Image src={"/logo.svg"} alt="logo" width={10} height={10} className='h-8 w-8 mr-1'/>
   <div className='text-4xl font-black '>
     Kuma
   </div>
  </div>
     <span className='font-light hidden md:block'>Make the Blockchain and Decentralized Finance accessible to everyone. </span>

      <div className='flex justify-center gap-2'>
        <Button variant="neutral" size="icon">
          <Linkedin />
        </Button>
        <Button variant="neutral" size="icon">
          <Twitter />
        </Button>
        <Button variant="neutral" size="icon">
          <Send />
        </Button>
        <Button variant="neutral" size="icon">
          <Mail />
        </Button>
      </div>
    </footer>
  )
}
