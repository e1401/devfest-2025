import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Link2, LinkIcon, Mic2, Table2, Ticket, User2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Image from 'next/image';
import ConfAfterImage from '@/components/conf-after-image';

export default function MainPage() {
  return (
    <div className="container flex items-center justify-center px-4 mx-auto">
      <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
        <div className="mx-auto  sm:mt-0 sm:grid-cols-3 lg:gap-16">
          <div className="z-10 flex flex-col items-center ">
            <div className=" bg-devfest-light dark:bg-devfest-dark max-h-[300px]"></div>
            <h2 className="text-center w-full lg:text-4xl font-bold drop-shadow-2xl shadow-black/50 mb-10">
              27th October 2023
            </h2>
            <div className="flex flex-col items-center gap-6">
              <Link
                href="https://www.entrio.hr/event/devfest-2023-14840"
                target="_blank"
              >
                <Button className=" w-64 h-16 rounded-2xl lg:text-xl border-2 shadow-xl bg-background text-foreground hover:text-background">
                  <Ticket className="mr-3"></Ticket>
                  <p>Get Tickets</p>
                </Button>
              </Link>
              <Link href="/agenda">
                <Button className=" w-64 h-16 rounded-2xl lg:text-xl border-2 shadow-xl bg-background text-foreground hover:text-background">
                  <Table2 className="mr-3"></Table2>
                  <p>View agenda</p>
                </Button>
              </Link>
              <Link href="/speakers">
                <Button className=" w-64 h-16 rounded-2xl lg:text-xl border-2 shadow-xl bg-background text-foreground hover:text-background">
                  <User2 className="mr-3"></User2>
                  <p>Meet the speakers</p>
                </Button>
              </Link>
              <h2 className="text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50">
                15+ speakers over 2 stages
              </h2>
              <h2 className="text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50">
                Panels: Open source | Management
              </h2>
              <h2 className="text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50">
                Food, drinks, a lot of networking
              </h2>
              <h2 className="text-center w-full lg:text-2xl font-bold drop-shadow-2xl shadow-black/50">
                Huge after-party
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 my-20 items-center">
            <div className="w-[500px] pt-2 px-2 border shadow-lg bg-background rounded-xl">
              <ConfAfterImage />
            </div>
            <h2 className="text-center w-full lg:text-3xl font-bold drop-shadow-2xl shadow-black/50">
              Mobile | Web | Cloud | AI
            </h2>
          </div>
          <div className="p-6 max-w-[1020px] rounded-2xl shadow-lg bg-background/70">
            <h1 className="text-center lg:text-3xl font-bold mb-3">Location</h1>
            <Link href="https://wespa.hr/" target="_blank">
              <h2 className="text-center mb-8 w-full lg:text-3xl font-bold bg-gradient-to-br from-yellow-400 to-purple-700 dark:from-purple-300 dark:to-yellow-200  bg-clip-text text-transparent">
                WESPA Business and Lounge, Zagreb
              </h2>
            </Link>
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <Image
                className=""
                src={'/wespa-lounge.jpg'}
                alt={'Wespa spaces lounge'}
                height={300}
                width={449}
              ></Image>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4632311407963!2d15.999859577358484!3d45.801980410836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7403d03984b%3A0x9e5d18ec57e2bd78!2sWESPA%20Business%20%26%20Lounge!5e0!3m2!1sen!2shr!4v1693745621894!5m2!1sen!2shr"
                width="450"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="p-6 max-w-[1020px] rounded-2xl shadow-lg bg-background/70">
          <h2 className="text-center mb-8 w-full lg:text-3xl font-bold">
            Organized by:
          </h2>
          <div className="flex items-center gap-x-5">
            <Link href={'https://gdg.community.dev/gdg-zagreb/'}>
              <Image
                className="rounded-2xl"
                src={'/GDG-logo.png'}
                alt={'GDG Logo'}
                height={150}
                width={150}
              ></Image>
            </Link>
            <Link
              href={'https://developers.google.com/womentechmakers'}
              target="_blank"
            >
              <Image
                className="rounded-2xl"
                src={'/wtm-logo.png'}
                alt={'WTM Logo'}
                height={100}
                width={100}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
