import React from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'

const RenderDish = ({ dish })=>{
        return(
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
}
                             
const RenderComments = ({ comments }) =>{
        return( 
            <div className="col-12 col-md-5 m-1">
                <h5 className="pb-2">Comments</h5>
                <ul className="list-unstyled">
                {
                    comments.map(comment =>{
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
                </ul>    
            </div>   
        )
    }
const DishDetail = ({ dish }) =>{
        return (
            dish!=null?
            (<div className="container">
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments comments={dish.comments} />
                </div>
            </div>):
            (<div></div>)
        )
}


export default DishDetail
