import React from 'react'
import './Aboutme.scss'
import Portrait from '../../Image/portrait.jpeg'
const Aboutme = () => {
  return (
    <div>
        <section id="about-me">
          <div className="about-me-container">
            <div className="about-me-text-container">
              <h2>About Me</h2>
              <p>
                Hi! I'm Jung !
              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor quasi laudantium debitis molestiae,
              </p>
              <p>
                quisquam modi velit quas veniam,
              odit accusamus adipisci aliquam quae totam iure.
              Illum quasi reprehenderit magni. Repudiandae?
              </p>
            </div>
            <img src={Portrait} alt="Maybe add my portrait" className="portrait"/>
          </div>
        </section>
    </div>
  )
}

export default Aboutme