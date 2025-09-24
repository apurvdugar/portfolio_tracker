
import './App.css'
import "@radix-ui/themes/styles.css";
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
