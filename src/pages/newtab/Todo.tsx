import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const Todo = ({ children }: { children?: string }) => {
  const [newItem, setNewItem] = useState("");

  const [todoList, setTodoList] = useLocalStorage("todos", []);

  const toggleCurrent = (itemId) => {
    setTodoList((currentTodo) =>
      currentTodo.map((i) =>
        i.id == itemId
          ? {
              content: i.content,
              done: !i.done,
              id: i.id,
            }
          : i
      )
    );
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    setTodoList((currentTodo) => [
      ...currentTodo,
      {
        content: newItem,
        done: false,
        id: todoList?.at(-1)?.id + 1 || 1,
      },
    ]);
    setNewItem("");
  };

  return (
    <div className="square todo" style={{ flexDirection: "column" }}>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              name={todo.id + ""}
              id={todo.id + ""}
              checked={todo.done}
              onClick={() => toggleCurrent(todo.id)}
            />

            <label htmlFor={todo.id + ""}>{todo.content}</label>

            <button
              className="delete"
              onClick={() =>
                setTodoList((currentTodo) =>
                  currentTodo.filter((i) => i.id !== todo.id)
                )
              }
            >
              ✖
            </button>
          </div>
        );
      })}
      <form onSubmit={(e) => addNewTodo(e)}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
