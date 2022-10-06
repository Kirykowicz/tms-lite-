import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function IndividualLoad({ setViewLoad, LoadNumber }) {
  return (
    <>
      <Button onClick={() => setViewLoad(false)}>Back to main page</Button>
    </>
  );
}
