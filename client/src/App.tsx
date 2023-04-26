import { BrowserRouter } from "react-router-dom";
import './App.css'
import Routing from "./routes/routing";
import { GlobalState } from "./global/GlobalState";



function App() {

  return (
    <BrowserRouter>
      <GlobalState>

        <Routing />
      </GlobalState>
    </BrowserRouter>
  )
}

export default App
