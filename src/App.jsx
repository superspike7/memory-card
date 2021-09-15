import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";

const cardsJson = [
  { id: 1, img: "1" },
  { id: 2, img: "2" },
  { id: 3, img: "3" },
  { id: 4, img: "4" },
  { id: 5, img: "5" },
  { id: 6, img: "6" },
  { id: 7, img: "7" },
  { id: 8, img: "8" },
  { id: 9, img: "9" },
  { id: 10, img: "10" },
];

function App() {
  const [cards, setCards] = useState(cardsJson);
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (hasDuplicateVal(clicked)) {
      if (!alert("You Lose!")) {
        setCurrentScore(-1);
        setClicked([]);
      }
    } else if (!hasDuplicateVal(clicked)) {
      setCurrentScore(currentScore + 1);
    }
  }, [clicked]);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }

    if(currentScore === 10){
      alert("Congrats you win!");
    }
  }, [currentScore]);

  function hasDuplicateVal(arr) {
    return new Set(arr).size !== arr.length;
  }

  function handleClick(id) {
    setCards(shuffle(cards));
    setClicked([...clicked, id]);
  }

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <Nav currentScore={currentScore} highScore={highScore} />
      <div className="w-[80%] mx-auto grid grid-cols-5 bg-gray-100 mt-5 gap-5">
        {cards.map((card) => (
          <Card
            id={card.id}
            img={card.img}
            handleClick={handleClick}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
