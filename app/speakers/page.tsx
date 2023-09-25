import AgendaCard from '@/components/agenda-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import stages from '@/json/speakers.json';

export default async function Speakers() {
  return (
    <div className="container flex flex-col items-center px-4 p-10">
      <h1 className="mt-3 mb-6 text-4xl font-bold">Meet the speakers</h1>

      {stages.speakers.map((talk) => {
        return <AgendaCard talk={talk} />;
      })}
      <h2 className="mt-10 text-4xl font-bold">...AND MANY MORE TO COME</h2>
    </div>
  );
}
