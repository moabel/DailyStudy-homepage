import React from "react";

//! também precisa criar o histórico
//! também precisa criar o todo
export const Square = ({
  children,
  link,
  active,
  index,
  click,
  toggleActiveItem: toggleSquare,
  tabs,
}: {
  children?: string;
  link?: string;
  active?: boolean;
  click?: boolean;
  index?: number;
  toggleActiveItem?: any;
  tabs?: any;
}) => {
  const toggleTodo = () =>
    toggleSquare([
      ...tabs.map((item) =>
        item.id === index ? { ...item, active: !active } : item
      ),
    ]);
  return (
    <a
      className={"square " + (active ? "done" : "")}
      href={link}
      onKeyDown={(e) => {
        if (e.key === " ") {
          toggleTodo();
        }
      }}
      onClick={(event) => {
        if (click) {
          event.preventDefault();
        }
        toggleTodo();
        // setTimeout(() => {
        //   // window.close();
        // }, 500);
      }}
    >
      <div
        className="toggle"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleTodo();
        }}
      >
        ✖
      </div>
      {children}
    </a>
  );
};
