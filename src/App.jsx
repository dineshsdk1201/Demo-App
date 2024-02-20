// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
function App(){
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  //result state
  const [result, setResult] = useState("");
  const api={
    apiKey: "fec070a39137a9e3565912d29a78905b",
    base: "https://api.openweathermap.org/data/2.5/"

  }
      function handleSearch(){
  
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.apiKey}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      console.log(result.name);
      setResult(result);
      console.log(result.main.temp);
      setWeather(result.main)
    });


      }
      
  return (
    <div style={{backgroundColor:"red"}}>
      {/*write html and css for nav bar with 4 links which gote to related w3 schools page */}
      <nav>
        <a href="https://www.w3schools.com/html/">HTML</a>
        <a href="https://www.w3schools.com/css/">CSS</a>
        <a href="https://www.w3schools.com/js/">JavaScript</a>
        <a href="https://www.w3schools.com/react/">React</a>
      </nav>  
     

      <p>Hello React</p>
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <h4>{weather.temp}</h4>
    <h4>{result.name}</h4>
    </div>
  )
}
  
  
  

export default App
