import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mic2, Ticket } from 'lucide-react';

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
              &lt; Zagreb, 27th October 2023 &gt; <br /> @ Wespa Business and
              Lounge
              <div className="flex mx-auto">
                <Link
                  href="https://www.entrio.hr/event/devfest-2023-14840"
                  target="_blank"
                >
                  <Button className="mt-3 w-[190px]">
                    <Ticket className="h-4 w-4 lg:mr-2"></Ticket>
                    <div>Get Tickets</div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col gap-y-3 lg:max-w-[800px]">
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
                DevFest 2022 videos.
              </Link>
            </div>
            <div>
              Don't miss out on this opportunity to learn, network, and connect
              with fellow tech enthusiasts. Mark your calendars, spread the
              word, and let's make DevFest 2023 a tech-filled day to remember!
              🎉👩‍💻👨‍💻 #DevFest2023 #TechConference #ZagrebTech #GDG #GDSC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
