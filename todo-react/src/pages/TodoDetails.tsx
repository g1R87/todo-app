import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Todo } from '../App';

const TodoDetails = () => {
  const [todo, setTodo] = useState<Todo>();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetchAllTodos = async () => {
      const allTodos = await fetchAllTodos();

      console.log(allTodos);
    };
  }, []);

  return (
    <div className="todo-details">
      {isLoading ? <p>Loading...</p> : <p>{todo?.title}</p>}
    </div>
  );
};

export default TodoDetails;
