import React from "react";
import { useState } from "react";

const FormOne = ({ gotoNext }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [position, setPosition] = useState("");

  return (
    <div>
      <h1>Personal Detailes</h1>
      <form
        onSubmit={(e) =>
          gotoNext(e, { name: name, age: age, position: position })
        }
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default FormOne;
