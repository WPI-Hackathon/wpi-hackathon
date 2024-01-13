import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import NavBar from './components/NavBar'
import ProfileScreen from './screens/ProfileScreen'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </>
  )
}

export default App
