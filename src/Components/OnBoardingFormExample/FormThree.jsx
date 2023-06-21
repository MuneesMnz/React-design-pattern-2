import React, { useState } from "react";

const FormThree = ({ gotoNext }) => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div>
      <h1>Login Detailes </h1>
      <form
        onSubmit={(e) =>
          gotoNext(e, { userName: userName, Password: Password })
        }
      >
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormThree;
