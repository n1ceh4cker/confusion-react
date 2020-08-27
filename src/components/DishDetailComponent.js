import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form'
import Loading from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

const required = val => val && val.length
const maxlength = len => val => !(val) || (val.length <= len)
const minlength = len => val => val && (val.length >= len)

class CommentForm extends Component {
    state = {
        isModalOpen: false
    }
    toggleModal = () =>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit = (values) =>{
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    }
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span> Add Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="container">
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" 
                                    className="form-control"
                                    placeholder="Your Name"
                                    validators={{ required, minlength: minlength(3), maxlength: maxlength(15) }}/>
                                <Errors className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minlength: 'Length must be atleast 3! ',
                                            maxlength: 'Length must be atmost 15! '
                                        }} />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea rows="6" model=".comment" id="comment" name="comment" className="form-control"/>
                            </Row>
                            <Row>
                                <Button type="submit" color="primary" onClick={this.toggleModal}>Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const RenderDish = ({ dish })=>{
        return(   
            <Card key={dish.id}>
                <CardImg src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>            
        )
}
                             
const RenderComments = ({ comments, addComment, dishId }) =>{
        const commentList = comments.map(comment =>{
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
        return(   
            <React.Fragment>
                <h5 className="pb-3">Comments</h5>
                <ul className="list-unstyled">
                    {commentList}
                </ul>     
                <CommentForm addComment={addComment} dishId={dishId} />    
            </React.Fragment>    
        )
    }
const DishDetail = ({ dish, comments, addComment, isLoading, errMsg }) =>{
    if(isLoading){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Loading />
                    </div>
                </div>
            </div>
        )
    }
    else if(errMsg){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{errMsg}</h4>
                    </div>
                </div>
            </div>
        )
    }     
    else
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
                        <RenderComments comments={comments} 
                            addComment={addComment}
                            dishId={dish.id} />
                    </div>
                </div>
            </div>
        )
}


export default DishDetail
