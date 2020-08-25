import React from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const RenderDish = ({ dish })=>{
        return(   
            <Card key={dish.id}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>            
        )
}
                             
const RenderComments = ({ comments }) =>{
        return(       
            <ul className="list-unstyled">
            {
                comments.map(comment =>{
                    return(
                    <li key={comment.id}>
                        <div className="pb-3">
                            {comment.comment}
                        </div>
                        <div className="pb-3">
                            -- {comment.author}, {new Intl.DateTimeFormat('en-us', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </div>
                    </li>)
                })
            }
            </ul>       
        )
    }
const DishDetail = ({ dish, comments }) =>{
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu" >Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h5 className="pb-3">Comments</h5>
                        <RenderComments comments={comments} />
                    </div>
                </div>
            </div>
        )
}


export default DishDetail
