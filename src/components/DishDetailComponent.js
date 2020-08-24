import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'

class DishDetail extends Component {
    renderDish = (dish)=>{
        return(
            dish!=null?
            (<Card key={dish.id}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>):
            (<div></div>)
        )
    }
    
    renderComments = (comments) =>{
        return comments.map(comment =>{
                return(
                <li key={comment.id}>
                    <div className="pb-2">
                        {comment.comment}
                    </div>
                    <div className="pb-2">
                        -- {comment.author}, {new Intl.DateTimeFormat('en-us', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </div>
                </li>)
            })
        
    }
    render(){
        const comments = this.props.dish!=null?
                            (<div>
                                <h5 className="pb-2">Comments</h5>
                                <ul className="list-unstyled">
                                    {this.renderComments(this.props.dish.comments)}
                                </ul>    
                            </div>):
                            (<div></div>)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {comments}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail
