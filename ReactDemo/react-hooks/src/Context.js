import React, { useState, createContext, useContext } from 'react'
const CountContext = createContext()
function Context() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

function Counter() {
    const count = useContext(CountContext) // 获取count 
    return <h2>{count}</h2>
}

export default Context  