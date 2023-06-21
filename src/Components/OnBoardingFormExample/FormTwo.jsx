import React, { useState } from "react";

const FormTwo = ({ gotoNext }) => {
  const [c_name, setc_name] = useState("");
  const [Address, setAddress] = useState("");
  const [netWroth, setnetWroth] = useState("");

  return (
    <div>
      <h1>Company Detailes</h1>
      <form  onSubmit={(e) =>
          gotoNext(e, { companyName: c_name, Address: Address, netWroth: netWroth })
        }>
        <input
          type="text"
          placeholder="Company Name"
          value={c_name}
          onChange={(e) => setc_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="NetWroth"
          value={netWroth}
          onChange={(e) => setnetWroth(e.target.value)}
        />

        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default FormTwo;
