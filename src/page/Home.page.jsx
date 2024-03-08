import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const nav = useNavigate();
  const handleToContact = () => {
    nav("/contact");
  };

  const handleDataTransfer = (e) => {
    e.preventDefault();
    console.log(text);
    nav("/contact", { state: { name: text } });
  };
  return (
    <div>
      <p>HomePage</p>
      <button
        className="border-2 border-fuchsia-400 p-3 mt-5 bg-cyan-400 text-white rounded-lg"
        onClick={handleToContact}
      >
        Next To Contact
      </button>
      <form>
        <label htmlFor="name" className=" block">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="  border-2 border-gray-200 block mt-3"
        />
        <button className="border-2 border-fuchsia-400 px-3 py-1 mt-5 bg-cyan-400 text-white rounded-lg" onClick={handleDataTransfer}>Let's  Go</button>
      </form>
    </div>
  );
};

export default HomePage;
