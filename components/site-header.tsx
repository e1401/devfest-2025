import Image from 'next/image';
import { ModeToggle } from '@/components/theme-toggle';
import { MessagesSquare, Ticket } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="flex gap-x-2">
          <Image
            src={'/GDG.png'}
            height={35}
            width={35}
            alt={'GDG logo'}
          ></Image>
          <div className="text-md mt-1">Google Developer Groups</div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center gap-x-2">
            <Link href="https://linktr.ee/zagrebgdg">
              <Button variant={'outline'}>
                <MessagesSquare className="h-4 w-4 mr-2"></MessagesSquare> Talk
                to us!
              </Button>
            </Link>
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
