import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className="container flex items-center justify-center px-4 mx-auto">
      <div className="mx-auto  sm:mt-0 sm:grid-cols-3 lg:gap-16">
        <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
          <div className="z-10 flex flex-col items-center">
            <div className="mt-[30vh] mx-40 font-medium duration-150 lg:text-5xl font-display text-xl">
              DEVFEST 2023
            </div>
            <div className="mt-4 mb-16 text-lg lg:text-xl text-center duration-1000  dark:group-hover:text-slate-200 group-hover:text-slate-500 flex flex-col gap-3">
              &lt; COMING SOON &gt;
              <Link
                target="_blank"
                href={
                  'https://docs.google.com/forms/d/e/1FAIpQLScrrAm6aIN9C2WPPI3Ir1xQmtXz67SOE-qhE97YarNaPFiq9w/viewform?pli=1'
                }
              >
                <Button>Apply to be a Speaker!</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
