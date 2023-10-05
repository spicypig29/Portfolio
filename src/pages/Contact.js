import React from 'react'
import Navbar from '../Component/Navbar/Navbar.js'
import './Contact.scss'

import {FaPhone , FaEnvelope , FaGithub , FaLinkedin } from 'react-icons/fa'

const Cantact = () => {
  return (
    <div className='Contact_Container'>
      <Navbar/>
      <main>
        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>
          <p>Have an interesting project? I would love to hear about it!</p>
          <div className='Contact_Icon_Container'>
            <a href="#"><i className='contactIcon'><FaEnvelope /></i></a>
            <a href="#"><i className='contactIcon'><FaGithub /></i></a>
            <a href="#"><i className='contactIcon'><FaLinkedin/></i></a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cantact