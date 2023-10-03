import React from 'react'
import Navbar from '../Component/Navbar/Navbar.js'

const Cantact = () => {
  return (
    <div className='Contact-Container'>
      <Navbar/>
      <main>
        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>
          <p>Have an interesting project? I would love to hear about it!</p>
          <div>
            <a href="#"><i className="fab fa-linkedin icon"></i></a>
            <a href="#"><i className="fab fa-github icon"></i></a>
            <a href="#"><i className="fas fa-envelope-square icon"></i></a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cantact