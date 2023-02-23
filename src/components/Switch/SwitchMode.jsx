import { useState, useEffect } from 'react'
import './switchMode.min.css'

function SwitchMode() {
  const [darkMode, setDarkMode] = useState('dark-mode');

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, [])

  function handleClick() {
    setDarkMode(darkMode != 'dark-mode' ? 'dark-mode' : 'light-mode');

    if(darkMode != 'dark-mode')
    { 
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }


  return (
    <>
      <span className="spanSwitchPc positionSwitch">
        <input type="checkbox" id="switch" onClick={handleClick} className='color-mode miSwitch' />
        <label htmlFor='switch' className="miSwitch">Toggle</label>
      </span>
    </>
  )
}

export default SwitchMode