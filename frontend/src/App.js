import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav} from 'react-bootstrap'; 
import ClientList from './components/ClientList';
import Pathways from './components/Pathways';

function App() {

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Facilita Jurídico</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Clientes</Nav.Link>
              <Nav.Link as={Link} to="/rotas">Rotas</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<ClientList />} />
            <Route path="/rotas" element={<Pathways />} />
          </Routes>
        </Container>
      </div>

    </Router>
    
  );
}

export default App;
