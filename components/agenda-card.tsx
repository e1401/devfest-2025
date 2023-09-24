import React, { Suspense } from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AgendaCard(props: {
  talk: {
    time: string;
    name: string;
    imgSrc: string;
    info: string;
    talkName: string;
    talkInfo: string;
  };
}) {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full border p-3 rounded-lg my-3 bg-primary-foreground/20 hover:bg-primary-foreground "
      >
        <AccordionItem value="item">
          <AccordionTrigger>
            <div className="flex flex-col lg:flex-row items-center lg:gap-x-12 gap-y-3 w-full">
              <h1 className="text-3xl font-semibold text-left lg:text-center w-[150px] hidden lg:block">
                {props.talk.time}
              </h1>
              <div className="flex items-center gap-x-3 w-[450px]">
                <Suspense
                  fallback={
                    <Skeleton className="w-[100px] h-[100px] rounded-full" />
                  }
                >
                  <Image
                    className="rounded-full"
                    src={props.talk.imgSrc}
                    alt={props.talk.name}
                    height={100}
                    width={100}
                  ></Image>
                </Suspense>
                <div className="flex flex-col gap-3 items-start">
                  <h2 className="text-2xl font-bold text-left">
                    {props.talk.name}
                  </h2>
                  <h5 className="text-left text-sm">{props.talk.info}</h5>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-[35vw] gap-3 items-start">
                <h2 className="text-2xl font-bold text-left">
                  {props.talk.talkName}
                </h2>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col lg:flex-row items-center lg:gap-x-12 gap-y-3 border p-3 rounded-lg">
              <h5 className="text-sm">{props.talk.talkInfo}</h5>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
