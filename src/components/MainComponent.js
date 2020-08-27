import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent'
import Header from './Header';
import Footer from './Footer';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreaters'
import { actions } from 'react-redux-form';
const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDishpatchToProps = dispatch =>({
    addComment: (dishId, rating, author, comment)=> dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()), 
    resetFeedbackForm: () => dispatch(actions.reset('feedback'))
})
class Main extends Component {
    componentDidMount(){
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
    }
    render() {
        console.log(this.props)
        const HomePage = () =>{
            return(
            <Home 
                dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
                dishLoading={this.props.dishes.isLoading}
                dishErrMsg={this.props.dishes.errMsg}
                promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMsg={this.props.promotions.errMsg}
                leader={this.props.leaders.filter(leader => leader.featured)[0]}
            />
            )
        }
        const DishWithId = ({match}) =>{
            return(
                <DishDetail dish={this.props.dishes.dishes.filter(dish => dish.id===parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.errMsg}
                    comments={this.props.comments.comments.filter(comment => comment.dishId===parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                    commentLoading={this.props.comments.isLoading}
                    commentErrMsg={this.props.comments.errMsg}
                />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDishpatchToProps)(Main))