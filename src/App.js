import React, { useState } from "react";
import Game from "./components/Game";
import UserInput from "./components/UserInput";
import { drawCards, shuffleCards } from "./logic";
import './App.css';

function App() {
  const [numOfCards, setNumOfCards] = useState(0);
  const [order, setOrder] = useState([]);
  const handleSubmit = (number) => {
    const num = parseInt(number);
    if (num % 2 === 0) {
      setNumOfCards(num);
      const cardsList = shuffleCards(drawCards(numOfCards));
      setOrder(cardsList);
    }
  };
  const handleShuffle = (order) => {
    let newOrder = shuffleCards(order);
    setOrder(newOrder);
  };
  const handleReset = () => {
    setNumOfCards(0);
    setOrder([]);
  };

  return (
    <div className="app">
      <UserInput handleSubmit={handleSubmit} />
      {numOfCards ? (
        <Game numOfCards={numOfCards} order={order} />
      ) : (
        <p>Please enter an even number.</p>
      )}
      <div className="group__btn">
      <button onClick={handleShuffle}>Shuffle</button>
      <button onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
