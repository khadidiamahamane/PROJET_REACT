import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1 className="bg-blue-500">BONJOUR</h1>
      </section>

      <section className="flex flex-col items-center gap-4 p-8">
        <p className="text-lg">Tu as cliqué {count} fois</p>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="min-h-11 cursor-pointer rounded-lg bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800"
        >
          Cliquer
        </button>
      </section>
    </>
  )
}

export default App
