import { useState, useEffect } from 'react'
import * as API from '../../services/getPortfolioData'

function Experience() {
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])

  useEffect(() => {
    API.getExeperience("experience").then(setExperience)
    API.getEducation("education").then(setEducation)
  }, [])

  return(
    <>
      <section className="resume py-4 d-lg-flex justify-content-center align-items-center" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <h2 className="mb-4">Experiencia</h2>
              <hr className='rounded p-1'/>

              <div className="timeline">
              {experience.map((data) => (
                <div className="timeline-wrapper" key={data.id}>
                  <div className="timeline-yr">
                    <span>{data.year}</span>
                  </div>
                  <div className="timeline-info">
                    <h3 className="mb-0"><span>{data.title}</span></h3>
                    <h3><small className="ms-0"><a target="blank" href={data.link}>{data.subtitle}</a></small></h3>
                    {data.info.map((info) => (
                      <p className="fs-6" key={info}>{info}</p>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="col-lg-5 col-12">
              <h2 className="mb-4 mobile-mt-2">Educación</h2>
              <hr className='rounded p-1'/>
              
              <div className="timeline">
                {education.map((data) => (
                  <div key={data.id} className="timeline-wrapper">
                    {data.year != "" &&
                      <div className="timeline-yr">
                        <span>{data.year}</span>
                      </div>
                    }
                    <div className="timeline-info">
                      <h3><span>{data.title}</span><small><a target="blank" href={data.link}>{data.subtitle}</a></small></h3>
                      {data.info.map((info) => (
                        <p className="fs-6" key={data.id}>{info}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Experience