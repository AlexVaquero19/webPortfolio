import React from 'react';
import { useState, useEffect } from 'react'
import * as API from '../../services/getPortfolioData'

function Habilities(){
  const [habilities, setHabilities] = useState([])

  useEffect(() => {
    API.getHabilities().then(setHabilities)
  }, [])

  return(
    <>
      <section className='about d-lg-flex mb-4 justify-content-center align-items-center'>
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-center">Habilidades</h2>
            <hr className='rounded p-1'/>
          </div>

          <div className="row">
            <div className='col-md-6 col-sm-12 text-center'>
              <h3><small>Nivel Intermedio Alto</small></h3>
              <hr className='bg-dark' />

              <div className='habilities'>
                {habilities.map((data) => (
                  <React.Fragment key={data.id}>
                    {data.skills.intermediate.map((h) => (
                      <div className="border d-flex p-2 align-items-center fw-bold" key={h.id}>
                        <span className={h.class}>
                          <img className={`mx-2 ${h.imgClass}`} src={`${window.location.origin}/icons/${h.icon}.svg`} alt={h.text} /> 
                        </span>
                        <div>{h.text}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className='col-md-6 col-sm-12 text-center basic'>
              <h3><small>Nivel Básico</small></h3>
              <hr className='bg-dark' />

              <div className='habilities'>
                {habilities.map((data) => (
                  <React.Fragment key={data.id}>
                    {data.skills.basic.map((h) => (
                      <div className="border d-flex p-2 align-items-center fw-bold" key={h.id}>
                        <span className={h.class}>
                          <img className={`mx-2 ${h.imgClass}`} src={`${window.location.origin}/icons/${h.icon}.svg`} alt={h.text} />
                        </span>
                        <div>{h.text}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <h2 className="text-center">Otros Datos de Interés</h2>
            <hr className='rounded p-1'/>
          </div>

          <div className="row">
            <div className='col-md-6 col-sm-12 text-center'>
              <h3><small>IDE</small></h3>
              <hr className="bg-dark" />

              <div className='habilities'>
                {habilities.map((data) => (
                  <React.Fragment key={data.id}>
                    {data.skills.ide.map((h) => (
                      <div className="border d-flex p-2 align-items-center fw-bold" key={h.id}>
                        <span className={h.class}>
                          <img className={`mx-2 ${h.imgClass}`} src={`${window.location.origin}/icons/${h.icon}.svg`} alt={h.text} /> 
                        </span>
                        <div>{h.text}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className='col-md-6 col-sm-12 text-center'>
              <h3><small>IDE</small></h3>
              <hr className="bg-dark" />

              <div className='habilities hab-hobbies'>
                {habilities.map((data) => (
                  <React.Fragment key={data.id}>
                    {data.skills.hobbies.map((h) => (
                      <div className="border d-flex p-2 align-items-center fw-bold" key={h.id}>
                        <span className={h.class}>
                          <img className={`mx-2 ${h.imgClass}`} src={`${window.location.origin}/icons/${h.icon}.svg`} alt={h.text} /> 
                        </span>
                        <div>{h.text}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Habilities;