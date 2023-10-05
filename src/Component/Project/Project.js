import React from 'react'
import './Project.scss'

import SinglePageWeb from '../../Image/single page website .png'

const Project = () => {
  return (
    <div>
          {/* Projects Section */}
        <section id="projects">
          <h2>Projects</h2>
          <details className="project">
            <summary className="project-title">
              <h3>E-Commerce App</h3>
            </summary>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Diagram_for_the_computation_of_Bernoulli_numbers.jpg/220px-Diagram_for_the_computation_of_Bernoulli_numbers.jpg"
              alt="Lovelace's diagram from note G, the first published computer algorithm"
              className="project-image"
            />
            <p className="project-description">
              The world's first computer program for computing Bernoulli numbers.
            </p>
          </details>
          <details className="project">
            <summary className="project-title">
              <h3>Single Page Website</h3>
            </summary>
            <img
            src={SinglePageWeb}
            alt="singlepage website"
            className="project-image"
            width='300px'
            />
            <p className="project-description">
              Layout design
            </p>
          </details>
          <details className="project">
            <summary className="project-title">
              <h3>The Ada programming language</h3>
            </summary>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ada_Mascot_with_slogan.svg/220px-Ada_Mascot_with_slogan.svg.png"
              alt='Ada mascot, a black and cobalt blue hummingbird, flying above the slogan "Time-tested, safe and secure"'
              className="project-image"
            />
            <p className="project-description">
              My work inspired the United States Department of Defense to name their new programming language after me.
            </p>
          </details>
        </section>
    </div>
  )
}

export default Project