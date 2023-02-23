import React from 'react'
import Avatar from '@mui/material/Avatar'
import SocialButtons from '../Buttons/SocialButtons';
import meIMG from '../../assets/me.jpg';
import SwitchMode from '../Switch/SwitchMode';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light z-3 animate__animated animate__fadeIn">
      <div className="container d-flex">
        <a className="navbar-brand d-flex align-items-center animationBackground" href="./">
          <Avatar alt="Profile IMG" src={meIMG} sx={{ width: 55, height: 55 }}/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-md-5" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item m-2">
              <a href="#project" className="nav-link p-0"><span data-hover="Proyectos">Proyectos</span></a>
            </li>
            <li className="nav-item m-2">
              <a href="#resume" className="nav-link p-0"><span data-hover="Resumen">Resumen</span></a>
            </li>
            <li className="nav-item m-2">
              <a href="#skills" className="nav-link p-0"><span data-hover="Habilidades">Habilidades</span></a>
            </li>
            <li className="nav-item m-2">
              <a href="#otros" className="nav-link p-0"><span data-hover="Otros">Otros</span></a>
            </li>

            <section className="wrapper">
              <SocialButtons 
                href="https://github.com/AlexVaquero19/"
                iconStyle="github"
                text="Github"
                icon="fab fa-github fa-lg"
              />

              <SocialButtons 
                href="https://www.linkedin.com/in/alexvaquero19/"
                iconStyle="linkedin"
                text="LinkedIn"
                icon="fab fa-linkedin fa-lg"
              />
            </section>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar