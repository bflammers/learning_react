import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            <p>
                {props.textLength > 5 ? 'Text ok' : 'Text too short'}
            </p>
        </div>
    )
}

export default ValidationComponent