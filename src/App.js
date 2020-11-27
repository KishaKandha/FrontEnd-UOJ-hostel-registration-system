import React, { useState } from 'react';
import logo from './logo.svg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import  Menu from  './components/MenuComponent';
import './App.css';

function App() {
  return (
    /* navabar component */
    <div>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>

   
    <Menu />
    </div>
  );
}

export default App;
