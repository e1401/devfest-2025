import SpeakerCard from '@/components/speaker-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import speakers from '@/json/speakers.json';
import Link from 'next/link';

export default async function Speakers() {
  return (
    <div className="container flex flex-col items-center px-4 p-10">
      <h1 className="mt-3 mb-6 text-4xl font-bold">
        Meet the speakers and find out more about their talks
      </h1>
      <h2 className="mt-3 mb-6 text-2xl font-bold">
        Want to see the agenda? Check &nbsp;
        <Link href={'/agenda'}>
          <span className="underline">here</span>
        </Link>
      </h2>
      {speakers.speakers
        .sort((a, b) =>
          a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])
        )
        .map((talk) => {
          return <SpeakerCard talk={talk} />;
        })}
      <h2 className="mt-10 text-4xl font-bold">...AND MANY MORE TO COME</h2>
    </div>
  );
}
