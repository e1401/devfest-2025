import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mic2, Ticket } from "lucide-react";

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
              <div className="flex gap-x-5">
                <Link
                  target="_blank"
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScrrAm6aIN9C2WPPI3Ir1xQmtXz67SOE-qhE97YarNaPFiq9w/viewform?pli=1"
                  }
                >
                  <Button className="mt-3 w-[190px]">
                    <Mic2 className="h-4 w-4 lg:mr-2"></Mic2>
                    Become a Speaker!
                  </Button>
                </Link>
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
          <div className="p-6 border bg-background">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4632311407963!2d15.999859577358484!3d45.801980410836315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7403d03984b%3A0x9e5d18ec57e2bd78!2sWESPA%20Business%20%26%20Lounge!5e0!3m2!1sen!2shr!4v1693745621894!5m2!1sen!2shr"
              width="400"
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
