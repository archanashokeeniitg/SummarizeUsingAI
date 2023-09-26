import React from 'react'
import "../App.css"
import {logo} from "../assets"

const Hero = () => {
  return (
   
    // <header className='w-full flex justify-center items-center flex-col'>
    //     <nav className='w-full flex justify-between items-center mb-10 pt-3 ' />
    //     <img src= {logo} />
   
    // <button type= "button" className='black_btn' onClick = {() => window.open("https://github.com")}>Github</button>
    // <h1 className='head_text'> Generate Poetry by Heart</h1>
    // <h1 className='head_text orange_gradient'>by ThatIITGIRL</h1>
    // </header>
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button type= "button" className='black_btn' onClick = {() => window.open("https://github.com")}>Github</button>
   
      </nav>

      <h1 className='head_text'> Generate Poetry by Heart <br className='max-md:hidden' /></h1>
        <h1 className=' head_text orange_gradient '>by ThatIITGirl</h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
    
  )
}

export default Hero