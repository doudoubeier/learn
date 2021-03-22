import React, { useRef, useState, useEffect } from 'react'
import useWinSize from './PrimaryHooks'
function Ref() {
    // 使用useRef来获取DOM元素
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = 'hello world'
        console.log(inputEl);
    }

    const [text, setText] = useState('hello bug')
    const textRef = useRef()

    // 使用useRef来保存变量
    useRef(() => {
        textRef.current = text
    })

    const size = useWinSize()
    return (
        <>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>test</button>
            <br />
            <br />
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            <div>页面Size:{size.width}x{size.height}</div>
        </>
    )
}

export default Ref