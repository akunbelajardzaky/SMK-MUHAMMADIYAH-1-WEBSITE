"use client";

import React, { useState } from "react";

function Example() {
  const [gobles, setGobles] = useState(0);

  return (
    <div className="flex space-x-6 justify-center items-center h-screen font-bold">
      <button onClick={() => setGobles(gobles + 1)}>+</button>
      <p>Kamu sudah mengklik sebanyak {gobles} kali</p>
      <button onClick={() => setGobles(gobles - 1)}>-</button>
    </div>
  );
}

export default Example;
