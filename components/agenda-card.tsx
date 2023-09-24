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
        <h1 className="text-3xl font-semibold w-[100px]">{props.talk.time}</h1>
        <div className="flex items-center gap-x-3 w-[350px]">
          <Image
            className="rounded-full"
            src={props.talk.imgSrc}
            alt={props.talk.name}
            height={100}
            width={100}
          ></Image>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{props.talk.name}</h2>
            <h5 className="text-sm">{props.talk.info}</h5>
          </div>
        </div>
        <div className="flex flex-col max-w-[50vw] gap-3">
          <h2 className="text-2xl font-bold">{props.talk.talkName}</h2>
          <h5 className="text-sm">{props.talk.talkInfo}</h5>
        </div>
      </div>
    </>
  );
}
