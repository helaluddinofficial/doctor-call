import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const OnboardingPage = () => {
  return (
    <div className="flex  gap-3 my-20 mx-30">
      <Card className="container h-50 w-80 ">
        <CardHeader>
          <CardTitle>
            {' '}
            <Badge className="bg-emerald-800/30 font-bold text-2xl text-white">
              {' '}
              Join As a Doctor
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {' '}
          <h2> Hello </h2>{' '}
          <Button variant="ghost" className="bg-emerald-800/50">
            {' '}
            Join Now
          </Button>
        </CardContent>
      </Card>
      <Card className="container h-50 w-80  ">
        <CardHeader>
          <CardTitle>
            {' '}
            <Badge className="bg-emerald-800/50 font-bold text-2xl text-white">
              {' '}
              Join As a Patient
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {' '}
          <h2> Hello </h2>{' '}
          <Button variant="ghost" className="bg-emerald-800/50">
            {' '}
            Join Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingPage;
