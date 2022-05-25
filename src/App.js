import React from 'react';
import { Route, Routes } from 'react-router';
import Register from './component/Register';
import { Link } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
