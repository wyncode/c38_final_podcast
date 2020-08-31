import React from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import MypodcastSection from '../components/MypodcastSection';
const MyPodcast = ( { data ,onCardClick } ) => {
    let { catOne, catTwo, catThree } = data
    console.log(data)
    return (
        <div
        >
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div>
                    <MypodcastSection
                        data={catOne}
                        onCardClick={onCardClick}
                    />
                </div>
            {  catOne && catOne.length &&  <hr style={{
                    border: "2px solid grey",
                    width: "90%"
            }} /> }
                <div>
                    <MypodcastSection
                        data={catTwo}
                        onCardClick={onCardClick}

                    />
                </div>
              { catTwo && catTwo.length &&  <hr style={{
                    border: "2px solid grey",
                    width: "90%"
              }} /> }
                <div>
                    <MypodcastSection

                        data={catThree}
                        onCardClick={onCardClick}
                    />
                </div>

            </div>
        </div>
    );
};

export default MyPodcast;

