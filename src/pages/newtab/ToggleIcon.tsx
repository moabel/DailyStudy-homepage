import React from "react";

export function ToggleIcon({
  icon,
  active,
  clickEvent,
}: {
  icon?: any;
  active?: boolean;
  clickEvent: any;
}) {
  return (
    <div className={"show " + (active ? "active" : "")} onClick={clickEvent}>
      {icon}
    </div>
  );
}
