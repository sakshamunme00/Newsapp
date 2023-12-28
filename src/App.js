import React, { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import {
      BrowserRouter as Router,
      Link,
      Route,
      Routes
} from "react-router-dom"

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
       <Routes>
       
          <Route  path="/"  element={<News key="general" country='in' category='politics'/>}/>
          <Route  path="business/*"  element={<News key="business" country='in' category='business'/>}/>
          <Route  path="entertainment/*"  element={<News key="entertainment" country='in' category='entertainment'/>}/>
          <Route  path="general/*"  element={<News key="general" country='in' category='general'/>}/>
          <Route  path="health/*"  element={<News key="health" country='in' category='health'/>}/>
          <Route  path="science/*"  element={<News key="science" country='in' category='science'/>}/>
          <Route  path="sports/*"  element={<News key="sports" country='in' category='sports'/>}/>
          <Route  path="technology/*"  element={<News key="technology" country='in' category='technology'/>}/>
          <Route  path="politics/*"  element={<News key="politics" country='in' category='politics'/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App







