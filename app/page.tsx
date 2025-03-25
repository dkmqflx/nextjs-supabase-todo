import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen">
      <TodoList />
    </main>
  );
}
