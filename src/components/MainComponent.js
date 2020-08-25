import React, { Component } from 'react'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'
import { DISHES } from '../shared/dishes'
import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }
    onDishSelect = (dishId) =>{
        this.setState({ selectedDish: dishId })
    }
    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />
                <Footer />
            </div>
        )
    }
}
