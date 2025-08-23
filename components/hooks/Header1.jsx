'use server';

import {
  SignedIn,
  SignInButton,
  SignUpButton,
 
  SignedOut,
} from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Settings } from 'lucide-react';
import { UserRole } from '@/lib/generated/prisma';
import { User2 } from 'lucide-react';
import { User } from 'lucide-react';
import { Stethoscope } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { checkUsers } from '@/lib/checkUsers';

const HeaderClient = () => {
  const user=checkUsers()
  return (
    <div className="top-0 m-0 p-0 bg-emerald-500 h-10 flex items-center justify-between px-4">
      <Link href="#contact" className="font-bold text-2xl md:text-4xl">
        DoctorCall
      </Link>

      <SignedIn>
        {user?.role==="ADMIN" && (
          <Link href="/admin-dashboard">
            <Button className=" items-center gap-2">
              <User2 className="h-4 w-4" /> Admin Dashboard
            </Button>
            <Button variant="gost">
              {' '}
              <User className="h-10 w-10 md:hidden " />
            </Button>
          </Link>
        )}
      </SignedIn>
      <SignedIn>
        {user?.role === "UNASSIGN" && (
          <Link href="/onboarding">
            <Button className=" items-center gap-2">
              <Settings /> Onboarding
            </Button>
          </Link>
        )}
      </SignedIn>
      <SignedIn>
        {user?.role === "DOCTOR" && (
          <Link href="/doctor-dashboard">
            <Button className=" items-center gap-2">
              <Stethoscope /> Doctor Dashboard
            </Button>
          </Link>
        )}
      </SignedIn>
      <SignedIn>
        {user.role === "PATIENT" && (
          <Link href="/patient-dashboard">
            <Button className=" items-center gap-2">
              <Calendar /> Patient Dashboard
            </Button>
          </Link>
        )}
      </SignedIn>

      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
};

export default HeaderClient;
