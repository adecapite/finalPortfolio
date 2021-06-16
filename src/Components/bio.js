import React from 'react';
import Card from 'react-bootstrap/Card';

function bio(){
    return(
        <Card>
            <h3 id="bio">Me</h3>
            <Card.Body>
            <Card.Text>
                Hello! My name is Anthony DeCapite.
                Soon to be full stack developer learning to love React and not want to throw myself out the window while using it.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default bio;