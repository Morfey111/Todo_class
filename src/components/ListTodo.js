import React from "react";

function ListTodo({ todos }) {
  const todosArr = todos;
  return (
    <div>
      <ul>
        {todosArr.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id}.{todo.title} <button>x</button>
              <button>v</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListTodo;
