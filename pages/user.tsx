import React, { useState } from 'react';
import Head from 'next/head';

export default function User() {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  // const [state, setState] = useState({
  //   counter: 0,
  //   visible: true
  // });
  return (
    <>
      <h1>Hello User</h1>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Counter add</button>
      <p>{counter}</p>
    </>
  )
}