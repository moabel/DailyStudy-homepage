import React from "react";

export function ShowIcon({
  setShow,
  show,
  label,
  icon,
  iconAfter,
}: {
  setShow: any;
  show: any;
  label: string;
  icon?: any;
  iconAfter?: any;
}) {
  const newLocal = () => {
    if (!iconAfter) return icon;
    return show ? iconAfter : icon;
  };
  return (
    <div className="show" onClick={() => setShow(!show)} title={label}>
      {newLocal()}
    </div>
  );
}
