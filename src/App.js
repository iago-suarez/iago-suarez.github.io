import { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Elsed from './pages/Elsed'
import Home from './pages/Home'
import NotFoundPage from './pages/404'

class App extends Component {
  render () {
    return <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/elsed" element={<Elsed/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  }

}

export default App