import React from 'react';
import { Route, Routes } from 'react-router';
import Register from './component/Register';
import { Link } from 'react-router-dom';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import ProtectedRoutedAdmin from './component/ProtectedAdmin';
import ProtectedRoutedUser from './component/ProtectedUser';
import Banner from './component/Banner';

function App() {
  return (
    <div className="App">
    
      <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Banner/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route> 
          </Route>
          <Route element={<ProtectedRoutedAdmin/>}>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Route>
          <Route element={<ProtectedRoutedUser/>}>
                <Route path='/home' element={<Home/>}></Route>
          </Route>
          <Route path="*" element={<div>404 :page not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
