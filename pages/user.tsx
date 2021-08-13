import React, { useCallback, useEffect, useMemo, useState } from 'react';

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

  const handleCreateCounter = useCallback(() => {
    setCounter(counter + 1)
  }, [counter]);

  const handleVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <>
      <h1>Hello User {fullName}</h1>
      <button onClick={handleVisible}>Toggle visible</button>
      <button onClick={handleCreateCounter}>Counter add</button>
      {visible && (
        <>
          <p>{counter}</p>
        </>
      )}

    </>
  )
}