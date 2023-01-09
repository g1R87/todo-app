import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodo([...todo, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodo = todo.filter((todo) => todo.id !== id);

    setTodo(updatedTodo);
  };

  const handleCompleteTodo = (id: number) => {
    const updatedTodo = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
    });

    setTodo(updatedTodo as Todo[]);
  };

  return (
    <div className="container">
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
}

export default App;
