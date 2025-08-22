'use client';

import {
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
} from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Settings } from 'lucide-react';



const HeaderClient = ({ user }) => {
  return (
    <div className="top-0 m-0 p-0 bg-emerald-500 h-10 flex items-center justify-between px-4">
      <Link href="#contact" className='font-bold text-2xl md:text-4xl'>DoctorCall</Link>

      <SignedIn>
        {user?.role === 'ADMIN' && (
          <Link href="/admin-dashboard">
            <Button>
              <Settings /> Admin Dashboard
            </Button>
          </Link>
        )}

        {user?.role === 'UNASSIGN' && (
          <Link href="/onboarding">
            <Button>
              <Settings /> Onboarding
            </Button>
          </Link>
        )}

        {user?.role === 'DOCTOR' && (
          <Link href="/doctor-dashboard">
            <Button>
              <Settings /> Doctor Dashboard
            </Button>
          </Link>
        )}

        {user?.role === 'PATIENT' && (
          <Link href="/patient-dashboard">
            <Button>
              <Settings /> Patient Dashboard
            </Button>
          </Link>
        )}

        <UserButton />
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
