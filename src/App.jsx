import React from 'react'
import Canvas from './Components/Canvas'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div>
    <Routes>
    < Route exact path="/" element={<Home/>} />
    < Route exact path="/draw" element={<Canvas/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default App