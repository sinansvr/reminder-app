import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.css"
import {data} from "./assets/data"
import Main from "./components/Main";

function App() {


  return (
    <div className="App">
      <Header/>
      <Main data={data}/>
    </div>
  )
}

export default App
