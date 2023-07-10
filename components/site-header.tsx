import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { ModeToggle } from '@/components/theme-toggle';
import { Github, Linkedin, Ticket, Twitter } from 'lucide-react';
import Navbar from './navbar';
import { Button } from './ui/button';

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <Navbar />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center gap-x-2">
            <Button disabled variant={'outline'}>
              <Ticket className="h-4 w-4 mr-2"></Ticket>Get Tickets
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
