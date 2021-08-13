import { useEffect } from "react";

export default function Button() {
  useEffect(() => {
    return () => {
      console.log('Component will unmount');

    }
  })
  return (
    <h1>Button component</h1>
  )
}