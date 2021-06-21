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
                Recent graduate of The Ohio State University's Coding Boot Camp.
                Specalzing in UI Design with a favor of writing in React.
                A dog father of one, and has a penchant for using the word penchant.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default bio;