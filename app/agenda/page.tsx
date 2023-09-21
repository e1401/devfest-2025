import AgendaCard from '@/components/agenda-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import stages from '@/json/speakers.json';

export default async function Agenda() {
  return (
    <div className="container flex flex-col items-center px-4 mx-auto min-h-screen">
      <h1 className="mt-3 text-3xl font-bold">Event agenda</h1>
      <Tabs
        defaultValue="stage1"
        className="w-full mx-auto items-center flex flex-col mt-2"
      >
        <TabsList className="mx-auto">
          <TabsTrigger value="stage1">Stage 1</TabsTrigger>
          <TabsTrigger value="stage2">Stage 2</TabsTrigger>
        </TabsList>
        <TabsContent value="stage1">
          {stages.stage1.map((talk) => {
            return <AgendaCard talk={talk} />;
          })}
        </TabsContent>
        <TabsContent value="stage2">
          {stages.stage2.map((talk) => {
            return <AgendaCard talk={talk} />;
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
