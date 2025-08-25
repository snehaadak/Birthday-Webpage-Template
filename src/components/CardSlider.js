import React, { useState } from "react";

const cards = [
  { id: 1, text: "🎉 Happy Birthday❤️" },
  { id: 2, text: "card 1 " },
  { id: 3, text: "card 2" },
  { id: 4, text: "card 3" },
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