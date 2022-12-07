// import { useState } from "react";

// Code Keypad Component Here

function Keypad() {
  //   const [password, setPassword] = useState("");
  return (
    <input
      type="password"
      onChange={() => {
        console.log("Entering password...");
      }}
    />
  );
}

export default Keypad;
