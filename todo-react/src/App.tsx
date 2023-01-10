import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setIsLoading(false);
      });
  }, []);

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    if (todos) {
      setTodos([...todos, newTodo]);
    } else {
      setTodos([newTodo]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    if (!todos) return;

    const updatedTodo = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodo);
  };

  const handleCompleteTodo = (id: number) => {
    if (!todos) return;
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
    <>
      <TodoForm handleAddTodo={handleAddTodo} />

      {!isLoading ? (
        <TodoList
          todoList={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default App;
