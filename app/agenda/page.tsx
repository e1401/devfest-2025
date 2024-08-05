import AgendaCard from '@/components/agenda-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import enter from '@/json/enter.json';
import shift from '@/json/shift.json';
import exp from 'constants';
import Link from 'next/link';

const Agenda = async () =>  {
  return (
    <div className="container flex flex-col items-center px-4 p-10">
      <h1 className="mt-3 mb-6 text-4xl font-bold">
        DevFest Zagreb 2024 Agenda
      </h1>
      <h2 className="mt-3 mb-6 text-2xl font-bold">
       To be announced
      </h2>
    </div>
  );
}


export default Agenda;
