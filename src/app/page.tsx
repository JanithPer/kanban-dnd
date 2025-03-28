import { KanbanBoard } from "@/components/kanban/kanban-board";

export default function Home() {
  return (
   <>
    <h2 className="text-2xl font-semibold text-center pt-10 pb-5">Kanban Board</h2>
    <KanbanBoard />
   </>
  );
}
