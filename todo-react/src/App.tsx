import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodo);
  };

  const handleCompleteTodo = (id: number) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodo as Todo[]);
  };

  return (
    <div className="container">
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
}

export default App;
