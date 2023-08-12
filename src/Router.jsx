
import { Routes, Route } from 'react-router-dom'
import Home from './paths/Home'
import Series from './paths/Series'
import Movies from './paths/movies'
import Reviews from './components/Reviews'
import Cartoons from './paths/Cartoons'
import Error from './paths/Error'
import Params from './components/Params'

const Router = () => {
  return (
     <Routes>
            <Route path='/'  element= {<Home/>} />
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>} /> 
            <Route path='/cartoons' element={<Cartoons/>} />
            <Route path='/reviews' element={<Reviews/>} />
            <Route path='/params/:id' element={<Params/>}  />
           
            <Route  path='*'    element={<Error/>} />
           




     </Routes>

      
   
  )
}

export default Router
