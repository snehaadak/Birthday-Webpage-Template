import React, { useState } from "react";

export default function MailPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Mail Icon */}
      <button
        className="p-3 bg-pink-400 rounded-full shadow-lg text-white"
        onClick={() => setOpen(true)}
      >
        ✉️
      </button>

      {/* Popup Letter */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              💌 My Love Letter
            </h2>
            <p>
              You are the most special part of my life.  
              Wishing you all the happiness in the world! 🎂❤️
            </p>
            <button
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}