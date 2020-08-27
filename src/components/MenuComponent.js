import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Loading from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

const RenderMenuItem = ({ dish }) =>{   
    return(
        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}
const Menu = ({ dishes }) =>{ 
        let menu = null
        if(dishes.isLoading){
            menu = (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Loading />
                        </div>
                    </div>
                </div>
            )
        }
        else if(dishes.errMsg){
            menu = (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{dishes.errMsg}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            menu = dishes.dishes.map(dish =>{
                return(
                    <div className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} isLoading={dishes.isLoading} errMsg={dishes.errMsg} />
                    </div>   
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home" >Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
}

export default Menu