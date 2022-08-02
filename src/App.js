import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import dotenv from  'dotenv'
import News from './components/News';
// import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App=() => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize =process.env.REACT_APP_pageSize 
  const country = process.env.REACT_APP_country
  // console.log("process.env.REACT_APP_NEWS_API",process.env.REACT_APP_NEWS_API);
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/general" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;