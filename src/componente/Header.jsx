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
      <div className='btn'>
        <button className='btn-mail'><img  src={mailIcon}/><p>Email</p></button>
        <button className='btn-linkedin'><img  src={linkenlnIcon}/><p>Linkedln</p></button>
      </div>

    </header>
)}