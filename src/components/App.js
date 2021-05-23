import { useState, useEffect } from 'react'
import './App.scss'

export default function App() {

  let [counter, setCounter] = useState(0)

  useEffect(() => {
    async function handleCounterUpdate () {
      let result = new Promise((res) => {
        setTimeout(() => {
          res(`done! ${counter}`)
        },2000)
      })
      let data = await result
      console.log(data);
    }

    handleCounterUpdate()
  }, [counter])

  return (
    <>
      <h1 onClick = {() => {setCounter(counter + 1)}}>
        Hello world!
        {counter}
      </h1>
    </>
  )
}