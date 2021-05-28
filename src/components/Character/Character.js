
import React from 'react';
import {Button} from 'react-bootstrap'

const Character = (props) => {
    
    return (
            <Button className="ml-1 mr-1" onClick={props.clicker} variant="outline-primary">{props.character}</Button>
    )

}

export default Character;