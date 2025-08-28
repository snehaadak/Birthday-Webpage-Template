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
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 max-h-[70vh] overflow-y-auto text-center">
            <h2 className="text-xl font-bold text-pink-600 mb-2">
              Wish you many many happy returns of the day❤️🌻
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed" >
            <p>Write your Letter here!</p>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
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
