import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { AuthContext } from './context/authContext';
import { deleteTodos, getAllTodos } from './service/todo';

import Axios from 'axios';

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  dueDate: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      if (JSON.stringify(authContext?.auth) === '{}') {
        navigate('/login');
        return;
      }
    }, 5000);

    const fetchAllTodos = async () => {
      const data = await getAllTodos({
        headers: {
          authorization: `Bearer ${authContext?.auth.accessToken}`,
        },
      });
      setTodos(data.payload);
    };

    fetchAllTodos();
    setIsLoading(false);
  }, [authContext?.auth]);

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

    // const updatedTodo = todos.filter((todo) => todo.id !== id);

    // setTodos(updatedTodo);
    const deleteAtodo = async () => {
      await deleteTodos(
        {
          headers: {
            authorization: `Bearer ${authContext?.auth.accessToken}`,
          },
        },
        id
      );

      const data = await getAllTodos({
        headers: {
          authorization: `Bearer ${authContext?.auth.accessToken}`,
        },
      });
      setTodos(data.payload);
    };

    deleteAtodo();
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
      <Link to={`/login`}>
        <button className="main-btn">
          <span>Login/Signup</span>
        </button>
      </Link>
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
