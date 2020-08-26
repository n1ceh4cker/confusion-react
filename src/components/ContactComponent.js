import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Col, Input, Button, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        firstname: '', 
        lastname: '',
        email:'',
        telnum:'',
        agree: false,
        contactType: 'Tel.',
        feedback: '',
        touched: {
            firstname: false,
            lastname: false,
            telnum: false,
            email: false
        }
    }
    handleInputChange = (e) =>{
        const value = e.target.type === 'checkbox'? e.target.checked : e.target.value 
        this.setState({
            [e.target.name]: value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        alert('Contact information: ' + JSON.stringify(this.state))
    }
    handleBlur = (field) => (e) => {
        this.setState({
            touched: {...this.state.touched, [field]: true }
        })
    }
    validate = (firstname, lastname, telnum, email) =>{
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }
        if(this.state.touched.firstname && firstname.length < 3) 
            errors.firstname = 'First name should be atleast 3 characters long'
        else if(this.state.touched.firstname && firstname.length > 10) 
            errors.firstname = 'First name should be atmost 10 characters long'

        if(this.state.touched.lastname && lastname.length < 3) 
            errors.lastname = 'Last name should be atleast 3 characters long'
        else if(this.state.touched.lastname && lastname.length > 10) 
            errors.lastname = 'Last name should be atmost 10 characters long'

        const tel = /^\d{10}$/
        if(this.state.touched.telnum && !tel.test(telnum))
            errors.telnum = 'Tel number should be 10 digits only'
        const mail = /^\S+@\S+\.\S+$/
        if(this.state.touched.email && !mail.test(email))
            errors.email = 'Enter a valid email'
        return errors
    }
    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)
        return (
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home" >Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Conatact Us</h3>
                            <hr />
                        </div>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>:
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" href="tel:+919121727530" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" href="" class="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" href="mailto:confusion@food.com" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div class="row row-content">
                    <div class="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div class="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" id="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname===''}
                                        invalid={errors.firstname!==''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" id="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname===''}
                                        invalid={errors.lastname!==''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" id="telnum" placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        valid={errors.telnum===''}
                                        invalid={errors.telnum!==''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} /> 
                                    <FormFeedback>{errors.telnum}</FormFeedback>                               
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" id="email" placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email===''}
                                        invalid={errors.email!==''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset:2}}>
                                    <FormGroup check> 
                                        <Label check>
                                            <Input type="checkbox" name="agree" id="agree"
                                                value={this.state.agree}
                                                onChange={this.handleInputChange} />
                                            <strong>May we contact you?</strong>
                                        </Label> 
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <textarea class="form-control" name="feedback" id="feedback" rows="12"></textarea>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size:10, offset:2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
