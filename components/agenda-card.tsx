import React from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';

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
      <Separator className="my-4" />
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-12 gap-y-3 ">
        <h1 className="text-3xl font-semibold">{props.talk.time}</h1>
        <div className="flex items-center gap-x-3">
          <Image
            className="rounded-full"
            src={props.talk.imgSrc}
            alt={props.talk.name}
            height={100}
            width={100}
          ></Image>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{props.talk.name}</h2>
            <h5 className="text-sm">{props.talk.info}e</h5>
          </div>
        </div>
        <div className="flex lg:flex-col max-w-[50vw] gap-3">
          <h2 className="text-2xl font-bold">{props.talk.talkName}</h2>
          <h5 className="text-sm">
            We will go through the history of development workflow and how it
            could change in the near future. First, we will go through some of
            significant eras and advantages that were gained with incorporating
            new tech or processes. Afterwards, we will talk about how
            development workflows work now compared to before. Finally, we will
            be focusing on AI. More specifically, how AI could change our
            working and learning processes and compare this to some of more
            radical changes that happened before.
          </h5>
        </div>
      </div>
    </>
  );
}
