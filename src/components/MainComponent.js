import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'
import { DISHES } from '../shared/dishes'
import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
    state = {
        dishes: DISHES,
    }
    render() {
        const HomePage = () =>{
            return(<Home />)
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
