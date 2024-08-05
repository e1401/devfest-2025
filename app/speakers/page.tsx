import SpeakerCard from '@/components/speaker-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import speakers from '@/json/speakers.json';
import Link from 'next/link';

const Speakers = async ()  =>  {
  return (
    <div className="container flex flex-col items-center px-4 p-10">
      <h1 className="mt-3 mb-6 text-4xl font-bold">
        Meet the speakers and find out more about their talks
      </h1>
      <h2 className="mt-3 mb-6 text-2xl font-bold">
       To be announced
      </h2>
    </div>
  );
}


export default Speakers;