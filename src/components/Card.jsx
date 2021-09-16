import React from "react";

export default function Card(props) {
  return (
    <div
      className=" flex items-center justify-center bg-blue-300
       cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-110 "
      onClick={() => props.handleClick(props.id)}
    >
      <div className="">
        <img src={props.img} alt="" className="object-fit" />
      </div>
    </div>
  );
}
