import { useState, useRef, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Moviedetail from './Component/moviedetails'
import Search from './Component/Search'
import Home from './Component/homethumb'
import Slider from './Component/slider'
function App() {
  
  let [loader, setLoader] = useState(false)
  return (
    <>
    <div className="h-flex">
      <div className={loader==true? 'loader' : 'none'}></div>
    <div className={loader == true? 'loading': 'd-none'}>Loading....</div>
    </div>
    
    <Router>
      <Routes>
       
        <Route path='/' element={<Home setLoader={setLoader} />} />
        <Route path='/movie/search/:name/*' element={<Search setLoader={setLoader} />} />
        <Route path='/movie/:id' element={<Moviedetail />} />
      </Routes>
    </Router>
    </>

  )
}

export default App;
