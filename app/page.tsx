'use client';
import { DynamicCard } from '@/components/dynamic-card';

export default function Example() {
  return (
    <div className="container flex items-center justify-center px-4 mx-auto">
      <div className="mx-auto  sm:mt-0 sm:grid-cols-3 lg:gap-16">
        <DynamicCard>
          <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
            <div className="z-10 flex flex-col items-center">
              <span className="mt-[30vh] mx-40 font-medium duration-150 lg:text-5xl font-display text-xl">
                DEVFEST 2023
              </span>
              <span className="mt-4 mb-16 text-lg lg:text-xl text-center duration-1000  dark:group-hover:text-slate-200 group-hover:text-slate-500">
                &lt; COMING SOON &gt;
              </span>
            </div>
          </div>
        </DynamicCard>
      </div>
    </div>
  );
}
