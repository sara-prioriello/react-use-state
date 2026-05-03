import { useState } from 'react'
import languages from "../src/assets/data/languages.js"

import './index.css'

function App() {


  //creo la variabile di stato
  const [isActive, setIsActive] = useState(null)
  const [color, setColor] = useState('lightBlue')

  function toggleCard(id) {
    console.log(id)
    if (isActive === id) {
      return setIsActive(null)
    }
    setIsActive(id);
  }



  return (
    <>
      <h1>Learn Web Development</h1>


      <div className="container-card">


        {
          languages.map((item) => (
            <div className="card" key={item.id}>


              {<button onClick={() => toggleCard(item.id)} style={{ backgroundColor: isActive === item.id ? 'yellow' : 'lightBlue' }}>{item.title}</button>}


              {
                isActive === item.id &&
                (<div className="content">{item.description}</div>)
              }


            </div>
          ))
        }



      </div>


      <div className="container-card2">
        {
          languages.map((item) => (
            <>
              <div className="card2">
                {<button key={item.id} onClick={() => toggleCard(item.id)} style={{ backgroundColor: isActive === item.id ? 'yellow' : 'lightBlue' }}>{item.title}</button>}

                {isActive === item.id &&
                  (<div className="content2">{item.description}</div>)
                }
              </div>

            </>



          ))
        }
      </div>




    </>


  )
}

export default App
