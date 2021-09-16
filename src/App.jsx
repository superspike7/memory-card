import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";

const cardsJson = [
  { id: 1, img: "https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png" },
  { id: 2, img: "https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080203-3155899631-unkno.png" },
  { id: 3, img: "https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080201-7164581366-unkno.png" },
  { id: 4, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434111-473592_sanji_time_skip_1.png" },
  { id: 5, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434105-render_nicorobin.png" },
  { id: 6, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434113-chopper_time_skip_2.png" },
  { id: 7, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434115-473629_untitled_2.png" },
  { id: 8, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434117-473497_brook_timeskip1.png" },
  { id: 9, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2841730-law.jpg" },
  { id: 10, img: "https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7078671-9363995852-39fc3.jpg" },
  { id: 11, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/47703/3056239-7978640494-Jinbe.png" },
  { id: 12, img: "https://comicvine.gamespot.com/a/uploads/square_small/4/46706/1152176-current_blackbeard.png" },
  { id: 13, img: "https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080183-4615055614-unkno.png" },
  { id: 14, img: "https://comicvine.gamespot.com/a/uploads/square_small/5/57216/1090020-61600.jpg" },
  { id: 15, img: "https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080202-1635462455-unkno.png" },
];

function App() {
  const [cards, setCards] = useState(cardsJson);
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (hasDuplicateVal(clicked)) {
      if (!alert("You Lose! You clicked the the image twice!")) {
        setCurrentScore(-1);
        setClicked([]);
        setCards(shuffle(cards))
      }
    } else if (!hasDuplicateVal(clicked)) {
      setCurrentScore(currentScore + 1);
    }
  }, [clicked]);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }

    if(currentScore === cards.length){
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
