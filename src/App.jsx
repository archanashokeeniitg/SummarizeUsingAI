import React from 'react'
import Demo from './components/Demo'
import Hero from './components/Hero'
// import "./App.css"

const App = () => {
  return (
    <main className='main'>
      <div className='gradient' />
      <div className='app'>
        {/* <button onClick={() => console.log("yo")}>Hi</button> */}
        <Hero />
        <Demo />
      </div>
    </main>
    
  )
}

export default App