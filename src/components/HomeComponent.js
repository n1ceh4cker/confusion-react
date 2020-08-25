import React from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap'

function RenderCard({ item }) {
    return(
        <Card key={item.id}>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}
function Home({ dish, promotion, leader }) {
    return (
        <div>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={promotion} />
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
