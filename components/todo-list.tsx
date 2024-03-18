"use client";
import React, { useState } from "react";
import Checkbox from "./ui/checkbox";
import PrioritySelector from "./priority-selector";
import NoteInput from "./note-input";

interface Todo {
  text: string;
  completed: boolean;
  priority: string;
  note: string;
}

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [priority, setPriority] = useState<string>("Low");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex].text = inputValue;
        newTodos[editIndex].priority = priority;
        setTodos(newTodos);
        setInputValue("");
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: inputValue, completed: false, priority, note: "" }]);
        setInputValue("");
      }
    }
  };

  const handleEditTodo = (index: number) => {
    setInputValue(todos[index].text);
    setPriority(todos[index].priority);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodoCompletion = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleNoteChange = (index: number, note: string) => {
    const newTodos = [...todos];
    newTodos[index].note = note;
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 text-black rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-yellow-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none"
        >
          {editIndex !== null ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
      <div className="mb-5">
        {inputValue.trim() !== "" && (
          <PrioritySelector value={priority} onChange={(value) => setPriority(value)} />
        )}
      </div>
      {todos.length === 0 ? (
        <p className="text-gray-500 font-serif">No todos yet. Start adding!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex items-center justify-between border border-gray-300 text-black rounded-md p-2 mb-2 ${
                todo.completed ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center">
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleTodoCompletion(index)}
                />
                <span className={`text-lg ${todo.completed ? "line-through" : ""}`}>
                  {todo.text} - {todo.priority}
                </span>
              </div>
              <div>
                {todo.priority === "High" && ( // Sadece yüksek öncelikli görevler için not ekleme alanını göster
                  <NoteInput
                    value={todo.note}
                    onChange={(note) => handleNoteChange(index, note)}
                  />
                )}
                <button
                  onClick={() => handleEditTodo(index)}
                  className="focus:outline-none"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="focus:outline-none ml-2"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

