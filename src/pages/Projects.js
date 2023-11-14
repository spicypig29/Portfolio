import React from 'react'
import Navbar from '../Component/Navbar/Navbar.js'
import './Projects.scss'

const Article = ({ imgUrl, title, content }) => (
  <article>
    <div className="article-wrapper">
      <figure>
        <img src={imgUrl} alt="" />
      </figure>
      <div className="article-body">
        <h2>{title}</h2>
        <p>{content}</p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about {title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
);
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <h2>Projects</h2>
        <section className="articles">
          <Article
            imgUrl="https://picsum.photos/id/1011/800/450"
            title="This is some title"
            content="Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
            />
          <Article
            imgUrl="https://picsum.photos/id/1005/800/450"
            title="This is some title"
            content="Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
            />
          <Article
            imgUrl="https://picsum.photos/id/103/800/450"
            title="This is some title"
            content="Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
            />
        </section>
      </main>
    </div>
  )
}

export default Projects