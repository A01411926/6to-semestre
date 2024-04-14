import { useState } from 'react'
import fotoCV from './assets/foto-profesional.svg'
import github from '/github logo.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/A01411926/6to-semestre.git" target="_blank">
          <img src={github} className="logo github" alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/vicencioantonio/" target="_blank">
          <img src={fotoCV} className="foto cv" alt="cv foto" />
        </a>
      </div>
      <h1>CV</h1>
      <h2>Antonio Vicencio</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You have clicked this button {count} times
        </button>
        <p>
          Click on the Github logo to go to this repository
        </p>
      </div>
      <p>
        Click on my photo to go to my LinkedIn
      </p>
      <br></br>
      <p>
      <footer>Contact information:</footer>
      <br></br>
      a01411926@tec.mx
      </p>
    </>
  )
}

export default App
