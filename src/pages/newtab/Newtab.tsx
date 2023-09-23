import React from "react";
import { useEffect } from "react";
import "@pages/newtab/Newtab.scss";
import { Square } from "./Square";
import { Todo } from "./Todo";
import { useLocalStorage } from "./useLocalStorage";
import { AddItem } from "./AddItem";

//
//! acho que os props dos icones podem melhorar...
import { ShowIcon } from "./ShowIcon";
import { ToggleIcon } from "./ToggleIcon";
import { icons } from "./icons";
// import "@src/pages/newtab/autoCloseTab";

const TopBar = ({ children }) => {
  return <div className="topbar">{children}</div>;
};

const Newtab = () => {
  let tabsData = [
    {
      link: "https://brilliant.org/",
      name: "brilliant",
      id: 0,
      active: false,
    },
    {
      id: 1,
      link: "https://leetcode.com/",
      name: "leetcode",
      active: false,
    },
    {
      id: 2,
      link: "https://pt.duolingo.com/",
      name: "duolingo",
      active: false,
    },
  ];

  const today = new Date().toLocaleDateString("en-GB");

  const [tabs, setTabs] = useLocalStorage("tabs", tabsData);
  const [setting, setSetting] = useLocalStorage("setting", true);
  const [show, setShow] = useLocalStorage("show", true);
  const [showNewItem, setShowNewItem] = useLocalStorage("newItem", true);
  const [history, setHistory] = useLocalStorage("history", { [today]: tabs });

  const resetTabs = () =>
    tabs.map((i) => {
      return { ...i, active: false };
    });

  useEffect(() => {
    console.log(today, history.hasOwnProperty(today));

    if (history.hasOwnProperty(today)) return;
    setTabs(resetTabs());
  }, []);

  useEffect(() => {
    console.log("Saving:", today);
    setHistory({ ...history, [today]: tabs });
    console.log("Saved:", history);
  }, [tabs]);

  const toggleActiveItem = (inside: any) => {
    setTabs(inside);
  };

  return (
    <div className="App">
      {tabs.map((element) => {
        return (
          <Square
            click={setting}
            tabs={tabs}
            link={element.link}
            index={element.id}
            active={element.active}
            toggleActiveItem={(input) => toggleActiveItem(input)}
          >
            {element.name}
          </Square>
        );
      })}
      <TopBar>
        <ShowIcon
          setShow={setShow}
          show={show}
          label="Todo"
          icon={<icons.show />}
          iconAfter={<icons.showOff />}
        />

        <ToggleIcon
          active={setting}
          clickEvent={(e) => setSetting((current) => !current)}
          icon={<icons.settings />}
        />

        <ShowIcon
          setShow={setShowNewItem}
          show={showNewItem}
          label="New item"
          icon={<icons.add />}
          iconAfter={<icons.close />}
        />

        <ToggleIcon
          clickEvent={() => {
            setTabs(resetTabs());
          }}
          icon={<icons.refresh />}
        />
      </TopBar>
      {show && <Todo />}
      {showNewItem && <AddItem tabs={tabs} setTabs={setTabs} />}
    </div>
  );
};

export default Newtab;
