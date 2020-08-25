import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent'
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export default class Main extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    }
    render() {
        const HomePage = () =>{
            return(
            <Home 
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
            />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
