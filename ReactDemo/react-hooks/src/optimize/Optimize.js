import React, { useState, useMemo } from 'react'

function Optimize() {
    const [xiaoMing, setXiaoMing] = useState('小明在值班')
    const [xiaoHong, setXiaoHong] = useState('小红在值班')

    return (
        <React.Fragment>
            <button onClick={() => { setXiaoMing(new Date().getTime() + '小明') }}>小明</button>
            <button onClick={() => { setXiaoHong(new Date().getTime() + '小红') }}>小红</button>
            <ChildComponent name={xiaoMing}>{xiaoHong}</ChildComponent>
        </React.Fragment>

    )
}

function ChildComponent({ name, children }) {

    function changeXiaoMing(name) {
        console.log('=======')
        return name + '轮岗'
    }

    const actionXiaoMing = useMemo(() => changeXiaoMing(name), [name])

    return (
        <React.Fragment>
            <div>{actionXiaoMing}</div>
            <div>{children}</div>
        </React.Fragment>
    )
}

export default Optimize