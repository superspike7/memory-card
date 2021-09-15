import React, { useState } from "react";

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

  function handleClick() {
    setCards(shuffle(cards))
  }

  function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <div className="w-[80%] mx-auto grid grid-cols-5 bg-gray-100 mt-5 gap-5">
        {cards.map((card) => (
          <div
            className="h-32 flex items-center justify-center bg-blue-300"
            key={card.id}
            onClick={handleClick}
          >
            <div className="text-xl">{card.img}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;