import React, { Component } from 'react';
import store from './store';
import { changeInputAction, addListAction, delItemAction, getListAction, getListOtherAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

// const data = [
//     '红烧狮子头',
//     '毛血旺',
//     '红烧排骨'
// ]

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputVal = this.changeInputVal.bind(this)
        this.addList = this.addList.bind(this)
        this.delItem = this.delItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        // store.subscribe返回一个函数 调用可以解除监听
        // let unsubscribe = store.subscribe((this.storeChange) => {}) unsubscribe()
        store.subscribe(this.storeChange) // 订阅redux状态 设置监听函数 一但state变化 立即执行storeChange函数
    }
    render() {
        return (
            <TodoListUI
                inputVal={this.state.inputVal}
                list={this.state.list}
                changeInputVal={this.changeInputVal}
                addList={this.addList}
                delItem={this.delItem}
            />
        )
    }
    changeInputVal(e) {
        // const action = {
        //     type: CHANGE_INPUT, // 对action的描述
        //     value: e.target.value // 要改变的值
        // }
        // 1.用户发出action
        // 2.store自动掉用reducer 并且传入两个参数 此时的state和action reducer会返回新的state
        // 3.store发生变化 立即调用listener函数 store.subscribe(listener)
        // 4.listener通过getState获取当前store 并操作重新渲染view
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addList() {
        const action = addListAction()
        store.dispatch(action)
    }
    delItem(index) {
        const action = delItemAction(index)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    componentDidMount() {
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
        //     console.log(res)
        // })
        // let res
        // setTimeout(() => {
        //     res = {
        //         "data": {
        //             "list": [
        //                 '早上4点起床，锻炼身体',
        //                 '中午下班游泳一小时',
        //                 '晚上8点到10点，学习两个小时'
        //             ]
        //         }
        //     }
        //     const action = getListAction(res.data.list)
        //     store.dispatch(action)
        // }, 1000)
        // redux-thunk
        // const action = getList()
        // store.dispatch(action)
        // redux-saga
        const action = getListOtherAction();
        store.dispatch(action);

    }
}

export default TodoList