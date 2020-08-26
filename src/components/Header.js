import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron, Collapse, Nav, NavItem, NavbarToggler, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    state = {
        isNavOpen: false,
        isModalOpen: false
    }
    toggleNav = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal = () =>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.toggleModal()
        alert('Username: ' + this.username.value + 
            'Password: ' + this.password.value +
            'Remember:' +  this.remember.checked)
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" name="username" id="username" 
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" id="password" 
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" id="remember" 
                                    innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>   
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
