import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// hooks写法
// let showSex = true
function Hooks() {
    /**
     * @description: useState
     * @param {*} initValue 状态初始值 
     * @return {*} [ nowSate, changeStateFn] 返回一个数组 第0位是当前状态值 第1位是改变状态值的方法函数
    */
    // 声明一个状态变量count 并把初始值设置为0 同时提供可以一个改变count值的setCount函数
    const [count, setCount] = useState(0)
    // 用useEffect函数替代生命周期
    // useEffect中函数是异步执行的 而生命周期中是同步执行的
    useEffect(() => {
        console.log('useEffect,count值为:' + count)
        return () => {
            console.log('解绑')
        }
    }, [count])
    // 多状态声明
    // const [age, setAge] = useState(18)
    // React Hooks不能出现在条件判断语句中，因为它必须有相同搞得渲染顺序
    // if (showSex) {// 会报错  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
    // const [sex, setSex] = useState('男')
    // }
    // const [work, setWork] = useState('前端开发工程师')
    return (
        <div>
            <div>计数器：{count}</div>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            {/* <p>小明</p>
            <p>年龄：{age}</p>
            <p>性别：{sex}</p>
            <p>职业：{work}</p> */}
            <Router>
                <ul>
                    <li>
                        <Link to='/'>index</Link>
                    </li>
                    <li>
                        <Link to='/list/'>list</Link>
                    </li>
                </ul>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/' component={List}></Route>
            </Router>
        </div>
    )
}

function Index() {
    // useEffect 第二个参数是一个数组 可以写入与状态相关的变量 当状态改变时进行解绑
    // 传[]空数组 当组件被销毁时进行解绑 实现componentWillUnmount生命周期
    useEffect(() => {
        console.log('此时为首页')
        return () => {
            console.log('离开首页')
        }
    }, [])
    return <div>首页</div>
}

function List() {
    useEffect(() => {
        console.log('此时为列表页')
        return () => {
            console.log('离开列表页')
        }
    }, [])
    return <div>列表页</div>
}
export default Hooks;