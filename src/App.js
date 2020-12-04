import React, { Component } from 'react';
import  Main from  './components/MainComponent';
import './App.css';


class App extends Component {

 /*  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };


  } ----Everything is included in MainComponent
  import { Navbar,  NavbarBrand } from 'reactstrap';
  
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
