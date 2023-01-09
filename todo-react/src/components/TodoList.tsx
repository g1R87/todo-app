import { Todo } from '../App';
import TodoItem from './Todo';

interface TodoListProps {
  todoList: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul className="todo-list">
      {props.todoList.map((todo: Todo) => (
        <TodoItem
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
          handleCompleteTodo={props.handleCompleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
