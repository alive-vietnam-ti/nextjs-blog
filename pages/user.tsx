import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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

  const handleClickSearch = (() => { })
  const inputEl = useRef(null);

  const fileEl = useRef(null);
  const handleUploadImage = (() => {
    fileEl.current.click()

  })

  return (
    <div style={{ margin: 30, lineHeight: 2 }}>
      <h1>Hello User {fullName}</h1>
      <div>
        <input type="text" ref={inputEl} />
        <button onClick={handleClickSearch}>Search</button>
      </div>
      <div style={{ margin: '10px 0' }}>
        <input style={{ visibility: 'hidden', width: 0, height: 0 }} type="file" ref={fileEl} />
        <button style={{
          width: 100, height: 40,
          background: '#000',
          border: 0,
          color: '#fff'
        }} onClick={handleUploadImage}>Upload image</button>
      </div>
      <button onClick={handleVisible}>Toggle visible</button>
      <button onClick={handleCreateCounter}>Counter add</button>
      {visible && (
        <>
          <p>{counter}</p>
        </>
      )}

    </div>
  )
}