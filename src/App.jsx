import './App.css'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/home'
import Details from './pages/Details'
import Navbar from './components/navbar'
import Favourites from './pages/favourites'

function App() {
 
  return (
    <div>


      {/* <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        toastClassName={() =>
          "bg-white text-gray-800 shadow-lg rounded-lg p-4 border-l-4 border-blue-500"
        }
        bodyClassName={() => "text-sm font-medium"} /> */}
         <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <Navbar/>
    <Routes>
     
      <Route path='/' element={<Home />}/>
      <Route path='/recipe-item/:id' element={<Details />}/>
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
     
    </div>
  )
}

export default App
