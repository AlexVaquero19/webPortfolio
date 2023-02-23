import React from 'react';
import { useState, useEffect } from 'react'
import AnchorButton from '../Buttons/AnchorButton';
import MeImg from '../../assets/me.jpg'
import Presentation from '../Presentation/Presentation';
import DefaultButton from '../Buttons/DefaultButton';

function About() {
  const [option, setOption] = useState(0);
  const subtitles = ["Programador", "Desarrollador Web"]
  const [fadeProp, setFadeProp] = useState({
    fade: 'animate__animated animate__fadeInLeft',
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'animate__animated animate__fadeInLeft') {
          setFadeProp({
              fade: 'animate__animated animate__fadeOutRight'
          })
      } else {
        setFadeProp({
            fade: 'animate__animated animate__fadeInLeft'
        });

        setOption(option => option > subtitles.length-2 ? 0 : option+1);
      }
    }, 2000);

    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <>
      <section className='about full-screen d-lg-flex justify-content-center align-items-center animate__animated animate__fadeInDown'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-12 col-12 d-flex align-items-center ms-0 ps-0'>
              <div className='about-text p-3'>
                <h2 className='subtitle main-color'>Hola a todos!, Soy</h2>

                <h1 className='mt-0 mb-5'>
                  <div className='mr-2'>Alejandro Vaquero Toba</div>
                  <div className='animated-info'>
                      <span className={`animated-item ${fadeProp.fade}`}>{subtitles[option]}</span>
                  </div>
                </h1>

                <div className="custom-btn-group mt-4">
                  <AnchorButton 
                    href={window.location.origin + "/files/Curriculum_Alejandro_Vaquero_Toba_ES.pdf"}
                    icon="fa-solid fa-file-pdf"
                    otherClass=""
                    text="CV Español"
                  />
                  <AnchorButton
                    href={window.location.origin + "/files/Curriculum_Alejandro_Vaquero_Toba_EN.pdf"}
                    icon="fa-solid fa-file-pdf"
                    otherClass="ms-sm-3 ms-md-3"
                    text="CV Inglés"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12 col-12 d-flex justify-content-center">
              <div className="row infoContainer rounded py-4">
                <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                  {<img src={MeImg} className="img-fluid rounded" alt="svg image" />}
                </div>
                <div className="col-lg-8 col-md-6 col-12">
                  <Presentation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;