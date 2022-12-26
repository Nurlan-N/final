import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useState, useEffect} from 'react';
import DotLoader from 'react-spinners/DotLoader'
import { Admin } from './pages/Admin';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Users } from './pages/Users';
import { AddUser } from './pages/AddUser';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"

};


function App() {
  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const respons = await axios.get('https://www.melivecode.com/api/users')
      setUsers(respons.data)
      setLoading(false)
    }
    getUsers();
  },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
         {
          loading ? <DotLoader
          color='#CA1016'
          loading={loading}
          cssOverride={override}
          size={100}
         
        /> :  
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/admin' element = {<Admin userList={users}/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/users' element = {<Users userList={users}/>} />
          <Route path='/add' element={<AddUser/>}/>
        </Routes>
         }
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
