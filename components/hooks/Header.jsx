import Link from 'next/link'
import React from 'react'
import { ThemeProvider } from '../ui/theme-provider'
import { ModeToggle } from '../ui/ModeToggle';
import { useTheme } from 'next-themes';
import { SignedOut, SignIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { SignedIn } from '@clerk/nextjs';
import { checkUsers } from '@/lib/checkUsers';

const Header =async () => {
  
	return (
    <header className="fixed top-4 left-1/2 z-50 transform text-nowrap -translate-x-1/2 ">
      <div className="flex justify-between rounded-full gap-8 border px-8 py-3 border-white/20 bg-white/10 items-center ">
        <Link href="#contact"> Contact</Link>
				<Link href="#toggle">
         <ModeToggle/>
        </Link> 
        <Link href="about"> About</Link>
        <Link href="about" className='gap-8'>
          
         <SignedOut>
            <SignInButton />
            <SignUpButton>
              <Button> Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Link>
      </div>
    </header>
  );
}

export default Header
