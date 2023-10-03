import React from 'react'
import Navbar from '../Component/Navbar/Navbar.js'
import { Space } from 'antd'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <p>Have an interesting project? I would love to hear about it!</p>
          <div>
            <Space>
              <li>Sound Design</li>
              <li>Front End Design</li>
              <li>Graphic Design</li>
            </Space>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Projects