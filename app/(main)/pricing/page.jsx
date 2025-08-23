import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PricingTable } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PricingPage = () => {
	return (
    <div className="bg-emerald-700/20 ">
      <Link href="/">
        {' '}
        <Button variant="secondary" className="bg-emerald-700 mx-auto my-10">
          {' '}
          <ArrowLeft className="h-4 w-4 red" />
          Back to Home Page
        </Button>
      </Link>

      <Card className=" text-center container mx-auto px-7 gap-3">
        <Badge className="bg-emerald-800 text-center items-center  mx-auto text-white h-10 text-2xl">
          {' '}
          Affordable Healthcare Pricing{' '}
        </Badge>
        <h2 className="text-center  text-2xl ">
          {' '}
          Join thousand of users who have simplified their healthcare journey
          with our platform . Get started today and experience healthcare the
          way it should be.{' '}
        </h2>
      </Card>
      <div>
        <PricingTable />
      </div>
    </div>
  );
}

export default PricingPage
