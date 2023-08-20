import React from 'react';
import { useRef } from 'react';
import { FaReact, FaCode, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import Container from './components/Container';
import ContainerDois from './components/ContainerDois';
import './App.css';
import ComponentDois from './components/ComponentDois';

  function App() {
    const [color,setColor] = useState(false)
    const ChangeColor = () => {
    if (window.scrollY>=90){
      setColor(true)
    } else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', ChangeColor)


const ref = useRef(null);
const handleClick =() =>{
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

const home = useRef(null);
const sobremim = useRef(null);

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
}



    return (
      <div>
      <header>
        <div className={color ? 'header-bg' : 'header'}>
            <a><h5 onClick={() => scrollToSection(home)} className='link'>Home</h5></a>
            <a><h5 onClick={() => scrollToSection(sobremim)} className='link'>Sobre mim</h5></a>
            <a><h5   onClick={handleClick}>Projetos</h5></a>
        </div>
      </header>
      <div><h1 ref={home}></h1></div>
      <div className="container">
        <Container />
      </div>
      <section className="contet">
      <ContainerDois ref={ref}/>
      </section>
      <div>
        <h1 className='gambiarra' ref={sobremim}></h1>
      </div>
      <section className="about-me">
      <ComponentDois/>
      </section>
      <div className="footer">
        <footer>
          <div>
           <a href='https://www.linkedin.com/in/pedro-rodriguez-3b0262223/' target='_blank'>
            <FaLinkedinIn/></a>
            <a href='https://github.com/PHrodidriguez' target='_blank'><FaGithub/></a> 
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
