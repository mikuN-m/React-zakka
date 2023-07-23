import React from "react"
// import top1 from '/top-img1.jpg'
import Top from "./pages/top"


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Top />} />
          </Routes>
        </Router>
      </>
      
    )
  }
}

export default App
