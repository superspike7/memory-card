import React from "react";

export default function Card(props) {
  return (
    <div
      className="h-32 flex items-center justify-center bg-blue-300"
      onClick={() => props.handleClick(props.id)}
    >
      <div className="text-xl">{props.img}</div>
    </div>
  );
}
