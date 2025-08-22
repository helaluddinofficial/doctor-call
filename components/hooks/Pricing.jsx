import React from 'react'
import { Card, CardContent } from '../ui/card'
import { PricingTable } from '@clerk/nextjs'

const Pricing = () => {
	return (
    <div>
      <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/20 ">
        <CardContent className="p-6 md:p-8 lg:p-10  ">
          <PricingTable 
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 200,
                  },
                },
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Pricing
