import Pricing from '@/components/hooks/Pricing';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { creditBenefits, features, testimonials } from '@/lib/data';
import { CheckIcon } from 'lucide-react';
import { Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <section className="py-22 top-20 overflow-hidden">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="container px-4 mx-auto">
            <Badge
            
              className="border border-b-emerald-600/30 bg-muted/50 text-emerald-500 "
            >
              DoctorCall . Healthcare made simple.
            </Badge>{' '}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font- ">
              Connect with Doctor <br />{' '}
              <span className="text-emerald-600">anytime,anywhere </span>
            </h1>
            <p className="mt-3 p-3">
              Book appointment, consult via video and manage your healthcare
              journey all in one secure platform
            </p>
            <span className="flex flex-col md:flex-row gap-4 mt-10">
              <Button className="bg-emerald-500/80 hover:bg-emerald-500/50 text-white"> Find Doctors</Button>
              <Button variant="secondary"> Let Call </Button>
            </span>
          </div>
          <div className="mx-4 px-4">
            <Image
              className=" md:pt-14 priority fill border-emerald-950 w-[100%] rounded-xl"
              src="/doctor2.png"
              alt="DoctorCall banner-1"
              width={500}
              height={900}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            {' '}
            <h2 className="text-4xl text-emerald-700">How it Works</h2>
            <p>
              Our platfrom makes healthcare accessible with just a few click
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {' '}
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-emerald-600">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge>Affordable Healthcare</Badge>
            <h2 className="text-3xl mb-4">Consultation Pakages</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the perfect consultation pakage that fits your healthcare
              needs
            </p>
          </div>
          {/* pricing table  */}

          <Pricing/>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400 " />{' '}
                  <h2> How Our System Works</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {creditBenefits.map((credit, index) => {
                    return (
                      <li key={index}>
                        <div className="flex gap-4">
                          <CheckIcon />
                          {credit}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* success storis */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            {' '}
            <Badge> Success Stories</Badge>
            <h2 className="text-3xl mb-4">What Our User Say</h2>
            <p>Hear from patients and doctors who use our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {' '}
            {testimonials.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className=" items-center mb-4">
                      <div className="rounded-full flex items-center justify-center mr-4 bg-emerald-900/40 h-12 w-12">
                        <span className="text-emerald-800-700 font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <h3 className="text-emerald-700 font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                    <p className=" text-muted-foreground ">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* the end  section */}

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="pt-6 relative overflow-hidden p-8 md:p-12 lg:p-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-4 ">
                  {' '}
                  Join thousand of users who have simplified their healthcare
                  journey with our platform . Get started today and experience
                  healthcare the way it should be.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href="/sign-up"> Sign-Up </Link>{' '}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-emerald-700/30 text-white hover:bg-muted/80"
                >
                  <Link href="/pricing"> Pricing </Link>{' '}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
