import Image from 'next/image';
import { ModeToggle } from '@/components/theme-toggle';
import { MessagesSquare, Ticket } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <Link href={'/'}>
          <div className="flex gap-x-2">
            <Image
              src={'/GDG.png'}
              height={35}
              width={35}
              alt={'GDG logo'}
            ></Image>
            <div className="text-md mt-1 hidden lg:inline">
              Google Developer Groups
            </div>
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center gap-x-2">
            <Link href="https://linktr.ee/zagrebgdg" target="_blank">
              <Button variant={'outline'}>
                <MessagesSquare className="h-4 w-4 lg:mr-2"></MessagesSquare>
                <div className="hidden lg:inline">Talk to us!</div>
              </Button>
            </Link>
            <Link
              href="https://www.entrio.hr/event/devfest-2024-18712"
              target="_blank"
            >
              <Button variant={'outline'}>
                <Ticket className="h-4 w-4 lg:mr-2"></Ticket>
                <div className="hidden lg:inline">Get Tickets</div>
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
