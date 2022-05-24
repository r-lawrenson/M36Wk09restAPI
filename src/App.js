import { useState, useEffect } from 'react';
import { Header } from './components/headers'
import { User } from './components/user'
import { fetchImages } from './utils';
import { LogForm } from './components/form.js'
import './App.css';

const App = () => {
  // const [userInput, setUserInput] = useState()
  const [user, setUser] = useState()
  const [images, setImages] = useState([])


  useEffect(() => {
    fetchImages(setImages)
  }, [])

  return (
    <div className="App">
      <div id="header">
        <Header  />
      </div>

      
          {!user && <LogForm setUser={setUser} />}
          {/* if user is not true hide logform */}    
      <User user={user} bio={user}/>
   
   
      <div id='images'>
      {images.map((image, i) => {
        return (
          <img 
            src={image.download_url} 
            alt={`random file from unsplash ${i}`} 
          />
          )
      })} 
      </div>
    </div>
  )
}

export default App;



  /* { <form onSubmit={submitHandler}>
       <input onChange={(e) => setUserInput(e.target.value)} />
      </form>
      {title ? <h2>you wrote a title</h2> : <h2>hurry</h2>}
      {title && <h2>horray</h2> }} */
// {/* <Header title={title} /> */} notes.... how to render title in header 