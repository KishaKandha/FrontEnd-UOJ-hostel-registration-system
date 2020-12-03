import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props);
}





render() {
  const menu = this.props.dishes.map((dish) => {
      return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
              <Card onclick={() => this.props.onclick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name}/>
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                      {/* <CardText>{dish.description}</CardText> */}
                  </CardImgOverlay>
              </Card>
          </div>
      )
  });

  return(
      <div className="container">
          <div className="row">
              {menu}
          </div>
          
      </div>
  );

  /*{this.renderDish(this.state.selectedDish)}  or <Dishdetail dish = {this.state.selectedDish} */
}

}

export default Menu;
