import { useState, useEffect } from "react";

export default function Customers() {
  useEffect(() => {
    fetch("/customers")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <>
      <h1>Customer info goes here</h1>
    </>
  );
}
