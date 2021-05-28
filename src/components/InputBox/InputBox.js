
import React from 'react';

const InputBox = (props) => {

    return (
        <div>
            <input  type="text" className="form-control"  placeholder="New values..." value={props.myString} onChange={props.setString} />
        </div>
    )
}
export default InputBox;