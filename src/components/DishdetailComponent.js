import React, {Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Media} from 'reactstrap';
import Menu from './MenuComponent';

class Dishdetail extends Component{
    constructor(props){
        super(props);
    }

    
   renderDish(dish)
   {

    
    return(
    <div key={dish.id} className="col-12 col-md-5 m-1">
    <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    </div>
        );

        

   }
   
    renderComments(comments){
        
            return comments.map((comment) => {
                return (
                    <div className="col-12 col-md-5 m-1">
                    <div className="list-unstyled">
                        <h4>Comments</h4>
                        <li key={comment.id}>
                        {comment.comment}
                        <br/>
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US',{ year : 'numeric' , month:'short', day : '2-digit'}).format(new Date(Date.parse(comment.date)))}
                       
                        <br/>
                       </li>
                    </div>
                    </div>
                )
            });
            
        }
        /*(new Date(comment.date)).toDateString() */
        
        
     
        
    

    render() {
        const {dish} = this.props;
        
    
       if(dish != null ){
        return (
            <div className="container">
                  <div className="row">     
                        
                        {this.renderDish(this.props.dish)}
                        
                    
    
                </div>
            </div>
        );
       }
       else{
       return (
        <div></div>
        );
       }


       
    }


}
export default Dishdetail;