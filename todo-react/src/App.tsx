import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { AuthContext } from './context/authContext';
import { getAllTodos } from './service/todo';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext?.auth.accessToken) {
      navigate('/login');
      return;
    }

    setIsLoading(true);

    const fetchAllTodos = async () => {
      const data = await getAllTodos({
        headers: `Bearer ${authContext?.auth.accessToken}`,
      });

      console.log(data);

      setTodos(data.payload);
    };

    fetchAllTodos();
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

  //login

  //create

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
