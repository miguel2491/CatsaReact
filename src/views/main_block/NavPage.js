import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Panel from '../views/main_block/panel';
import CheckList from '../produccion/checklist';
import Cancelado from '../produccion/pedido_cancelado';
import { Container } from 'react-bootstrap';

function NavBar() {
  return (
      <Container>
        <Routes>
           <Route path='/Panel' element={<Panel />} />
          <Route path='/CheckList' element={<CheckList />} />
          <Route path='/Cancelados' element={<Cancelado />} />
        </Routes>
      </Container>
  );
}

export default NavBar;
