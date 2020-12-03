import React, { Component } from 'react';
import { Navbar,  NavbarBrand } from 'reactstrap';
import  Main from  './components/MainComponent';
import './App.css';


class App extends Component {

 /*  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  } ----Everything is included in MainComponent
  
  
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu  dishes={this.state.dishes}/>
  
  */

  render(){
    return (
   <div> 
    <Main/>
   </div>
  );
}
}

export default App;
