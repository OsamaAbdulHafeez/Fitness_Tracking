import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import './App.css'
import Home from './pages/home/Home'
import Progress from './pages/progress/Progress';
import Workout from './pages/workouts/Workout';
import Nutrition from './pages/nutrition/Nutrition';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import NutritionDetails from './pages/nutritionDetails/NutritionDetails';
import Profile from './pages/profile/Proile';
export const mobilecontext = createContext()
function App() {
  // Inner Width
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };
    updateInnerWidth();
    window.addEventListener('resize', updateInnerWidth);
    return () => {
      window.removeEventListener('resize', updateInnerWidth);
    };
  }, []);

  // auth Context
  const { user } = useContext(AuthContext)
  // console.log(user)
  return (
    <mobilecontext.Provider
      value={{
        innerWidth: innerWidth
      }}
    >
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/home' element={user ? <Home /> : <Navigate to='/'/>} />
            <Route path='/progress/:id' element={user ? <Progress /> : <Navigate to='/'/>} />
            <Route path='/workout/:id' element={user ? <Workout /> : <Navigate to='/'/>} />
            <Route path='/nutrition/:id' element={user ? <Nutrition /> : <Navigate to='/'/>} />
            <Route path='/' element={user ? <Navigate to='/home'/> : <Login />} />
            <Route path='/signup' element={user ? <Navigate to='/home'/> : <Signup />} />
            <Route path='/profile/:id' element={user ? <Profile /> : <Navigate to='/'/>} />
            <Route path='/nutrition-details/:day/:id' element={user ? <NutritionDetails /> : <Navigate to='/'/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </mobilecontext.Provider>
  )
}

export default App
