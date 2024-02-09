import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Body from "./components/Body"
import Header from "./components/Header"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Editpage from './components/Editpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';



function App() {

  return (
    <div className="Mainpage">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Body/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/edit' element={<Editpage/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
