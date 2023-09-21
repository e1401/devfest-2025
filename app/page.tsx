import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Link2, LinkIcon, Mic2, Table2, Ticket } from 'lucide-react';

export default function MainPage() {
  return (
    <div className="container flex items-center justify-center px-4 mx-auto">
      <div className="mx-auto  sm:mt-0 sm:grid-cols-3 lg:gap-16">
        <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
          <div className="z-10 flex flex-col items-center">
            <div className=" mx-auto font-medium duration-150 lg:text-6xl font-display text-3xl">
              DEVFEST 2023
            </div>
            <div className="mt-4 mb-16 text-lg lg:text-2xl text-center duration-1000  dark:group-hover:text-slate-200 group-hover:text-slate-500 flex flex-col gap-3">
              Zagreb, 27th October 2023 <br />
              <Link href="https://wespa.hr/" target="_blank">
                <div className="flex gap-x-2">
                  @ WESPA Business and Lounge
                  <LinkIcon className="mt-2 h-5 w-5" />
                </div>
              </Link>
              <div className="flex mx-auto gap-x-2">
                <Link
                  href="https://www.entrio.hr/event/devfest-2023-14840"
                  target="_blank"
                >
                  <Button className=" w-[190px]">
                    <Ticket className="h-4 w-4 lg:mr-2"></Ticket>
                    <div>Get Tickets</div>
                  </Button>
                </Link>

                <Button disabled className="w-[190px]">
                  <Table2 className="h-4 w-4 lg:mr-2"></Table2>
                  <div>Check the agenda</div>
                </Button>
              </div>
            </div>
          </div>
          <div className="container flex flex-col gap-y-3">
            <div>
              🚀 Exciting News! DevFest 2023 is just around the corner, and you
              won't want to miss this tech extravaganza happening live in Zagreb
              on October 27th, 2023. Organized by GDGs and GDSC, as well as
              Women Techmakers Croatia, this event is set to be an unforgettable
              experience for tech enthusiasts.
            </div>
            <div>
              📱🌐☁️🤖 DevFest 2023 brings you a dynamic duo of tracks covering
              the hottest topics in the tech world: mobile, web, cloud, and AI.
              Whether you're a developer, designer, or tech enthusiast, there's
              something here for everyone. Get ready to dive deep into the
              latest trends and insights in these cutting-edge fields.
            </div>
            <div>
              🎙️ Renowned GDE speakers will be sharing their expertise,
              providing you with invaluable insights and inspiration. And guess
              what? The tickets are now up for grabs! Secure your spot with our
              early bird tickets – act fast before they're gone. Students, we've
              got special ticket options just for you.
            </div>
            <div>
              💬🔥 On top of the regular speaking sessions, which we’ll announce
              shortly, we’ll host two intense panel discussions, with the topics
              being Open Source development and Management trends in the IT
              industry.
            </div>
            <div>
              🎫📚 Stay tuned for more information about ticket links, session
              details, and the exciting lineup of speakers.
              <br /> 🌟 Curious about how it went last year? Check out the
              <Link href={'https://www.youtube.com/watch?v=sBUrtouEDPc'}>
                &nbsp;
                <span className="underline text-blue-500">
                  DevFest 2022 videos
                </span>
              </Link>
              &nbsp;and&nbsp;
              <Link
                href={
                  'https://drive.google.com/drive/u/2/folders/1k8cO3As1QwNEEjnIfHdDCrY-q04pEa6E'
                }
              >
                <span className="underline text-blue-500">gallery</span>
              </Link>
              .
            </div>
            <div>
              Don't miss out on this opportunity to learn, network, and connect
              with fellow tech enthusiasts. Mark your calendars, spread the
              word, and let's make DevFest 2023 a tech-filled day to remember!
              🎉👩‍💻👨‍💻 #DevFest2023 #TechConference #ZagrebTech #GDG #GDSC
            </div>
          </div>
          <div className="p-2 border bg-background">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4632311407963!2d15.999859577358484!3d45.801980410836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7403d03984b%3A0x9e5d18ec57e2bd78!2sWESPA%20Business%20%26%20Lounge!5e0!3m2!1sen!2shr!4v1693745621894!5m2!1sen!2shr"
              width="500"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
