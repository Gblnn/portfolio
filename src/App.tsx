import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import './styles/style.css'
import './styles/utils.css'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
