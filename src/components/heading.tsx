'use client'

import * as React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export function Heading() {


  return (
    <>
      <Button
        className="fixed right-6 top-6 sm:top-10 sm:right-10 z-50 font-black"
      >
Download
<Image src={"/logo.svg"} alt="logo" width={100} height={100} className="h-4 w-full ml-2 " />
      </Button>
    </>
  )
}
