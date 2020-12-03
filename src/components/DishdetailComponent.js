import React, {Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Media} from 'reactstrap';
import Menu from './MenuComponent';

class Dishdetail extends Component{
    constructor(props){
        super(props);
    }

    

    renderComments(comments){
        if(comments!= null){
            return comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        {comment.comment}
                        <br/>
                        -- {comment.author}, {(new Date(comment.date)).toDateString()}
                        <br/>
                    </li>
                )
            });
            
        }
        else {
            return(
                <div></div>
            );
        }
        
        
    }

    render() {
        const dish = this.props.dish;
        return (
            <div key={dish.id} className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div className="list-unstyled">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            
                
            </div>
        )
    }


}
export default Dishdetail;