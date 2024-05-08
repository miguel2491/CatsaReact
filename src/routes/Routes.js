import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../views/login/login';
import Panel from '../views/panel';
import RecPass from '../views/login/rec_pass'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/recuperar' element={<RecPass />} />
            <Route path='/panel' element={<Panel />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
