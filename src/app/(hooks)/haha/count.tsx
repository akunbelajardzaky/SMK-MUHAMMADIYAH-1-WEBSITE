"use client";

import React, { useState, useEffect } from "react";

function Example() {
  const [gobles, setGobles] = useState(0);
  // get
  // end get

  useEffect(() => {
    console.log("Component is mounted");
    document.title = `anda telah kilk ${gobles} kali`;
  }); //fungsi ini akan berjalan ketika ada yang di render


  useEffect(()=>{
    console.log("Component did mounted");
  },[]) //akan muncul saat di render pertama kali



  return (
    <div className="flex space-x-6 justify-center items-center h-screen font-bold">
      <button onClick={() => setGobles(gobles + 1)}>+</button>
      <p>Kamu sudah mengklik sebanyak {gobles} kali</p>
      <button onClick={() => setGobles(gobles - 1)}>-</button>
    </div>
  );
}

export default Example;
