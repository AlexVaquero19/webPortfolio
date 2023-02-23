import { useEffect, useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as API from '../../services/getPortfolioData'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectsSlider.min.css'

export default () => {
  
  const [projects, setProjects] = useState([])

  useEffect(() => {
    API.getProjects("projects").then(setProjects)
  }, [])

  return (
    <section className='container'>
      <div className="row mt-5">
        <h2 className="text-left">Proyectos</h2>
        <hr className='rounded p-1'/>
      </div>

      <div className="container d-flex justify-content-center">
        <h4 className="mb-3">Estos son algunos de los proyectos en los que he participado</h4>
      </div>

      <Swiper
        className='container'
        modules={[Navigation, Pagination]}
        navigation
        breakpoints = {{
          320: {
            width: 800,
            spaceBetween: 0,
            slidesPerView: 2,
          },
          768: {
            width: 1220,
            spaceBetween: 0,
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}>

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
    </section>
  );
};