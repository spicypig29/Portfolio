import './App.scss'; // Import your CSS styles here
import { Space } from 'antd';
import { FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaGit,FaGithub , FaMusic} from "react-icons/fa" ; //Font Awesome Icons
import Navbar from './Component/Navbar/Navbar.js';
import Aboutme from './Component/AboutMe/Aboutme';
import Project from './Component/Project/Project';

function App() {

  return (
    <div className="App">
      {/* Header Section */}
      <Navbar/>
      <main>
        {/* About Me Section */}
        <Aboutme />
        
        {/* Projects Section */}
        <Project />
        
        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <div id="skills-container">
            <Space>
              <i><FaHtml5/></i>
              <i><FaCss3Alt/></i>
              <i><FaJsSquare/></i>
              <i><FaReact/></i>
              <i><FaGit/></i>
              <i><FaGithub/></i>
            </Space>
            <Space>
              <FaMusic/>
            </Space>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>2023 Base in Tainan</footer>
    </div>
  );
}

export default App;
