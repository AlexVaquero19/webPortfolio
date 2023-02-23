import './Presentation.min.css'
import { useState, useEffect } from 'react'

function Presentation() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let today = new Date()
    let birthday = new Date(1999,3,19)
    var age_now = today.getFullYear() - birthday.getFullYear()
    let month = today.getMonth() - birthday.getMonth()

    if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())) age_now--

    setAge(age_now)
  },[])

  return (
    <>
      <section className='ps-5 d-flex flex-column'>
        <span><strong>Nombre:</strong> Alejandro Vaquero Toba</span>
        <span><strong>Edad:</strong> {age} (19/04/1999)</span>
        <span><strong>Email:</strong> <a href='mailto:vaquero.alejandro19@gmailto.com'>vaquero.alejandro19@gmail.com</a> </span>

        <hr className='rounded pt-1'/>

        <span className='text-justify'>
          Soy una persona con inquietudes que acaba de empezar su vida laboral, que está en busca de una empresa con la que poder crecer personal y laboralmente hablando. Lo que más busco es la formación continua y el uso de tecnologías punteras o que se me pueda dar acceso a estudiarlo por mi cuenta para poder reciclarme.
        </span>
      </section>
    </>
  );
}

export default Presentation;