import React, { useState } from 'react'
// import moment from 'moment'
import dynamic from 'next/dynamic'

// 组件懒加载
const Hello = dynamic(import('../components/hello'))

function Time() {
    const [time, setTime] = useState(Date.now())

    // 懒加载
    const changeTime = async () => {// 将方法变为异步模式
        const moment = await import('moment') // 等待moment加载完成
        setTime(moment.default(Date.now()).format()) // 使用default
    }

    return (
        <>
            <div>时间为：{time}</div>
            <button onClick={changeTime}>转换时间格式</button>
            {/* <Hello>hello</Hello> */}
        </>
    )
}

export default Time