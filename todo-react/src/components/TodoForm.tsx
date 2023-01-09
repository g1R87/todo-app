import { useState } from 'react';

interface TodoFormProps {
  handleAddTodo: (title: string) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (title.trim().length) {
      props.handleAddTodo(title);
      setTitle('');
    }
  };

  const handleTitleChange = (event: React.SyntheticEvent) => {
    setTitle((event.target as HTMLInputElement).value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-text-field">
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
