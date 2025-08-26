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
              Wish you many many happy returns of the day mere bacche❤️🌻
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed" >
            <p>
              Here's your very first love letter.....writing it here coz no matter what the future situations be,
              this uh can have forever and ever......coz i was scared a bit about what if your future partner asks 
              to throw it away......this one you can never throw na isliye aise☺️ </p>
              <p >Thanks for existing jaan 💋 you 
              can always count on me no matter what i will be there as your your to support you in every situation 
              be it emotional support or even physical support🤭🙈😂 Even tho recently it has been quite a down the 
              hill experience for both of us but in the end of the day all i want is to stick with uh.....coz us it 
              makes me happy.</p>
              <p>I love you and i love loving you. You are just a innocent kid to me.....every time i 
              pamper you, scold you, handle your tantrums i feel like i am a mom to a grownup kid and i love it....
              you are always gonna be my first cutu kid💕</p>
              <p>I wish we could have a future.....but anyways no matter 
              where we be in future i will always cherish what i had with you.....it was the bestttt i could ever 
              have🥺</p>
              <p> I love you so so so soooooooo muchhhhh❤️</p>
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
