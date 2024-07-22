import React from 'react';
import TopNav from './components/TopNav.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Router>
          <TopNav />
          <Routes>
            <Route exact path="/" />
          </Routes>
          {/* <Footer /> */}
        </Router>
    </div>
  )
}

export default App