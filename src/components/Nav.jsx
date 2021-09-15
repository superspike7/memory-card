
import React from "react";

export default function Nav({currentScore, highScore}){
  return(
    <div className="mb-5">
      <p className="text-xl font-normal">Score: {currentScore}</p>
      <p className="text-xl font-bold">High Score: {highScore}</p>
    </div>
  );
}