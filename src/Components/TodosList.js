import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleChangeProps, deleTodoProps, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleTodoProps={deleTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
