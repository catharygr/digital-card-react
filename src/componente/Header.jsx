import React from 'react'
import pepaImg from '/src/assets/pepa-img.jpg'
import mailIcon from '/src/assets/Mail.png'
import linkenlnIcon from '/src/assets/linkedin.png'

export default function Header() {
  return (
    <header className='header'>
      <img src={pepaImg} />
      <div className='header-nombre'>
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <a className='ver-enlace' href="#">laurasmith.website</a>
      </div>
      <div>
        <button><img src={mailIcon}/>Email</button>
        <button><img src={linkenlnIcon}/>Linkedln</button>
      </div>

    </header>
)}