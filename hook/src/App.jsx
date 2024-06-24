import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'


import './App.css'
function App() {
  const [image, serImage] = useState([])

  const getImage=()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      console.log(response);
      serImage(response.data.results)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });[]}

  return (
    <>
    <div className='flex flex-wrap justify-between m-8 p-3 justify-center'>
       {image.map((item)=>{
        return<img src={item.image}></img>
      
        })}</div>

    <button className="btn btn-primary" onClick={getImage}>Get Image</button>
    </>
  )
}

export default App
