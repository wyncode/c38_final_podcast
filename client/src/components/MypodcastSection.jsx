import React from 'react'
import {  Card, Button, CardDeck } from 'react-bootstrap'



const MypodcastSection = ( props ) => {
    const {data,onCardClick} = props
    return (
        <CardDeck style={{
            width: "80%"
        }}>
            
               { data && data.length && <Card.Body style={{marginLeft:"100px"}}>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <Button
                            variant="outline-primary"
                            style={{

                                margin: "15% 5px 5px 5px",
                                width: "100%",
                                padding: "30px",

                            }}>
                         {data[0].category}
                        </Button>
                    </Card.Text>
                        </Card.Body> }
            
            {data && data.map(rec=><Card key={rec._id} onClick={ ()=>onCardClick(rec._id) }>
                <Card.Img variant="top" src={rec.coverImage} width="300px" height="300px" />
            </Card>)}
            
        </CardDeck>
    )
}

export default MypodcastSection