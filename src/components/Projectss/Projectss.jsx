import * as API from '../../services/getPortfolioData'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

function Projectss() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    API.getProjects("projects").then(setProjects)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2 col-12 d-flex justify-content-center align-items-center">
            <h2>Proyectos</h2>
          </div>

          <div className="col-md-6 col-12">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              loop={true}
            >
              {projects.map((projects) => (
                <SwiperSlide key={projects.id}>
                  <div className="card">
                    <div className="card-header">
                      <img src={`${window.location.origin}/sliderImgs/${projects.img}.png`} alt="rover" />
                    </div>
                    <div className="card-body">
                      <span className="tag">{projects.code}</span>
                      <h5 className='mt-2'>{projects.title}</h5>
                      <p>{projects.description}</p>

                      <a className="learn-more" href="https://www.administradores-fincas.es/" target="_blank">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Ir a la Web</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide> 
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projectss