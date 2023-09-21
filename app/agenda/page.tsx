import AgendaCard from '@/components/agenda-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Agenda() {
  return (
    <div className="container flex flex-col items-center px-4 mx-auto min-h-screen">
      <h1 className="mt-3 text-3xl font-bold">Event agenda</h1>
      <Tabs
        defaultValue="track1"
        className="w-full mx-auto items-center flex flex-col mt-2"
      >
        <TabsList className="mx-auto">
          <TabsTrigger value="track1">Stage 1</TabsTrigger>
          <TabsTrigger value="track2">Stage 2</TabsTrigger>
        </TabsList>
        <TabsContent value="track1">
          <AgendaCard />
          <AgendaCard />
        </TabsContent>
        <TabsContent value="track2">
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
