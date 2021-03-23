
import React, { useState } from 'react'

const hello = () => {

    const [color, setColor] = useState('blue')

    const changeColor = () => {
        let arr = ['yellow', 'pink', 'blue', 'green', 'lightBlue', 'red']
        let index = Math.floor(Math.random() * 6)
        setColor(arr[index])
    }

    return (
        <>
            <div>hello world</div>
            <button onClick={changeColor}>改变颜色</button>
            <style jsx>
                {`
                    div{color: ${color}}
                `}
            </style>
        </>
    )
}

export default hello