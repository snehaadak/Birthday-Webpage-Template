import React, { useState } from "react";

const cards = [
  { id: 1, text: "🎉 Happy Birthday Bacche❤️" },
  { id: 2, text: "How does it feel to be the most handsome birthday boy today?" },
  { id: 3, text: "How did I get so blessed to call you mine?" },
  { id: 4, text: "You make me Happy and Horny!🙈" },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
      <p className="text-lg font-semibold">{cards[index].text}</p>
      <button
        onClick={nextCard}
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg"
      >
        ➡️
      </button>
    </div>
  );
}