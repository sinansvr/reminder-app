import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import {data} from "./assets/data";
import Main from "./components/Main";
import './App.css';
import Hero from "./components/Hero";



function App() {

  return (
    <div className="App ">
      <Header/>
      <Hero/>
      <Main data={data}/>
    </div>
  )
}

export default App
