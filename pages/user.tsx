import React, { useEffect, useMemo, useState } from 'react';

export default function User() {
  useMemo(() => {
    console.log('constructor');

  }, [])
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState({
    firstName: 'john',
    lastName: 'smith',
  });

  useEffect(() => {
    console.log('useEffect run');
  }, [])

  const fullName = useMemo(() => {
    return user.firstName + ' ' + user.lastName;
  }, [user])

  return (
    <>
      <h1>Hello User {fullName}</h1>
      <button onClick={() => {
        setVisible(!visible);
      }}>Toggle visible</button>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Counter add</button>
      {visible && (
        <>
          <p>{counter}</p>
        </>
      )}

    </>
  )
}