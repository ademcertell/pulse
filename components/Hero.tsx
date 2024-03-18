import TodoList from "./todo-list";

export default function Hero() {
  return (
    <main className="min-h-screen my-24">
      <h1 className="text-xl font-serif text-center text-gray-800 mb-6">
        Whats up for today?
      </h1>
      <div className=" mx-auto">
        <TodoList />
      </div>
    </main>
  );
}
