import { useState } from "react";
export const AddItem = ({ tabs, setTabs }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newLink, setNewLink] = useState("");

  const addNewItem = (event) => {
    event.preventDefault();
    const newItemValues = {
      link: newLink,
      name: newTitle,
      id: tabs.length + 1,
      active: false,
    };
    setTabs([...tabs, newItemValues]);
    setNewTitle("");
    setNewLink("");
  };

  return (
    <div className="square todo" style={{ flexDirection: "column" }}>
      <form onSubmit={(e) => addNewItem(e)}>
        <input
          type="text"
          placeholder="Titulo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="https://"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
