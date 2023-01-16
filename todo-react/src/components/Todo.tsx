import { Link } from 'react-router-dom';
import { Todo } from '../App';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface TodoProps {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
}

const TodoItem = (props: TodoProps) => {
  const handleDelete = () => {
    props.handleDeleteTodo(props.todo.id);
  };

  const handleComplete = () => {
    props.handleCompleteTodo(props.todo.id);
  };

  return (
    <li className="todo-item-li">
      <Link className="link" to={`/todo/${props.todo.id}`}>
        {props.todo.completed ? (
          <span className="todo-item todo-item--completed">
            <span>
              <CheckCircleIcon className="icon check" />
            </span>
            {props.todo.title}
          </span>
        ) : (
          <span className="todo-item">
            <span>
              <XCircleIcon className="icon cross" />
            </span>
            {props.todo.title}
          </span>
        )}
      </Link>
      <div>
        <button onClick={handleComplete} className="completed-btn">
          Complete
        </button>
        <button onClick={handleDelete} className="del-btn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
