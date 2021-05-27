
import React from 'react';
import { Form } from 'react-bootstrap';

const InputBox = (props) => {

    return (
        
        <Form>
            <Form.Control placeholder="New values..." value={props.myString} onChange={props.setString} />
        </Form>
    )
}
export default InputBox;