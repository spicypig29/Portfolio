import './App.scss'; // Import your CSS styles here
import { Space } from 'antd';
import { FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaGit,FaGithub , FaMusic} from "react-icons/fa" ; //Font Awesome Icons
import Navbar from './Component/Navbar/Navbar.js';
import Aboutme from './Component/AboutMe/Aboutme';
import Project from './Component/Project/Project';
import Ae from './Image/AE.png'
import Au from './Image/Au.png'
import Ai from './Image/adobe-Illustrator-logo-0-1.png'
import Pr from './Image/Pr.png'
import LogicPro from './Image/LogicPro.png'
import ProTools from './Image/ProTools.png'

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
            <div className='otherSkill_container'>
              <FaMusic />
              <img src={ProTools} alt='ProTools' className='otherSkillIcon ProTools'/>
              <img src={LogicPro} alt='LogicPro' className='otherSkillIcon' />
              <img src={ Ai } alt='Ai'className='otherSkillIcon'/>
              <img src={Au} alt='Au' className='otherSkillIcon Au'/>
              <img src={ Pr } alt='Pr'className='otherSkillIcon Pr'/>
              <img src={ Ae } alt='Ae'className='otherSkillIcon Ae'/>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>2023 Base in Tainan</footer>
    </div>
  );
}

export default App;
