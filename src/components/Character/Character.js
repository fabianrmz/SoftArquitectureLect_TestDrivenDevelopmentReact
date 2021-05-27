
import React from 'react';
import {Button} from 'react-bootstrap'

const Character = (props) => {
    
    return (
            <Button onClick={props.clicker} variant="outline-primary">{props.character}</Button>
    )

}

export default Character;