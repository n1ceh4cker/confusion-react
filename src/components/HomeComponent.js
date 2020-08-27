import React from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap'
import Loading from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

function RenderCard({ item, isLoading, errMsg }) {
    if(isLoading)
        return( <Loading /> )
    else if(errMsg)
        return ( <h4>{errMsg}</h4> )
    else
        return(
            <Card key={item.id}>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
}
function Home({ dish, promotion, leader, dishLoading, dishErrMsg, promoLoading, promoErrMsg }) {
    return (
        <div>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={dish} isLoading={dishLoading} errMsg={dishErrMsg} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={promotion} isLoading={promoLoading} errMsg={promoErrMsg} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={leader} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
