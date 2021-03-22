import React, { useReducer } from 'react';
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'

function PrimaryRedux() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default PrimaryRedux