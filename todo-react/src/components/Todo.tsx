import { Todo } from '../App';

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
    <li>
      {props.todo.completed ? (
        <span className="todo-item todo-item--completed">
          {props.todo.title}
        </span>
      ) : (
        <span className="todo-item">{props.todo.title}</span>
      )}

      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
