import React from 'react';
import Card from 'react-bootstrap/Card';
import Me from './../images/me.jpeg';

function bio(){
    return(
        <Card>
            <h3 id="bio">Meet The Designer</h3>
            <Card.Body>
            <Card.Img varient="top"
        src={Me} className="AbtImg" alt="myface" />
            <Card.Text>
                Hello! My name is Anthony DeCapite.
                Soon to be full stack developer learning to love React and not want to throw myself out the window while using it.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default bio;