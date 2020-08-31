import React from 'react';
import { Container, Button, Form, Row, Col, Card, CardDeck, InputGroup, FormControl } from 'react-bootstrap';
import '../App.css'
const Play = ( props ) => {
    const { showMoreArray, singlePodcast } = props
    return (
        <>

            <Container className="d-flex flex-column justify-content-center">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center"
                    }}

                >
                    <Form style={{width:"80%"}}>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                </svg>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        style={{
                            border: "2px solid grey",

                        }}
                        id="inlineFormInputGroup" 
                        placeholder="search" />
                        {/* <Form.Control
                            type="text"
                            style={{
                                border: "2px solid grey",
                                borderRadius: "10px",
                                margin: "15px",

                            }}
                        /> */}
                        </InputGroup>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center"
                            }}

                        >
                            <Form.Label>Currently Playing</Form.Label>
                        </div>
                    </Form>


                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center"
                    }}

                >
                    <Card style={{ width: "40%", marginBottom: "30px" }}>
                        <Card.Img variant="top" src={singlePodcast.coverImage} style={{ width: "100%", height: "200px" }} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    textAlign: "center"
                                }}
                            >{singlePodcast.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}
                            >
                                <svg style={{ fontSize: "50" }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>

                                <svg style={{ fontSize: "50" }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pause-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                                </svg>
                                <svg style={{ fontSize: "50" }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                                </svg>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </Container>
            <CardDeck>
                {showMoreArray.map( rec => <Card key={rec._id} style={{ width: "40%" }}>
                    <Card.Img variant="top" src={rec.coverImage} style={{ width: "100%", height: "200px" }} />
                    <Card.Body>
                        <Card.Title
                            style={{
                                textAlign: "center"
                            }}
                        >{rec.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <div>
                            <div className="float-left">
                                <svg style={{ fontSize: "40" }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <svg style={{ fontSize: "40px", marginLeft: "10px" }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    <path fill-rule="evenodd" d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                            <div className="float-right">
                                <svg style={{ fontSize: "50" }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-headphones" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 0 0-5 5v4.5H2V8a6 6 0 1 1 12 0v4.5h-1V8a5 5 0 0 0-5-5z" />
                                    <path d="M11 10a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3zm-6 0a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3z" />
                                </svg>
                            </div>
                        </div>
                    </Card.Footer>
                </Card> )}

            </CardDeck>
            <div className="finalButton">
                <Button
                    variant="outline-primary"
                    style={{
                        width: "30%",
                        margin: "30px"
                    }}
                >Show me something new </Button>
            </div>
        </>
    );
};

export default Play;