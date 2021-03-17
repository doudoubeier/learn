import { CHANGE_INPUT, ADD_LIST, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputVal: 'something',
    list: [
        '7:00am 洗漱',
        '10:00am 吃饭'
    ]
};
// 默认数据
// reducer只能那返回更改的数据 不能直接修改store 只有store自己能够修改
// reducer必须是纯函数 即返回的结果只根据传入的参数决定 若调用参数相同 则结果相同 不依赖于执行期间任何外部状态或数据的变化 所以不可再次期间进行ajax、new Date()和setTimeout等
export default (state = defaultState, action) => { // 方法函数 reducer中只能接收state 不能改变state
    if (action.type == CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) // 深拷贝state
        newState.inputVal = action.value
        return newState
    }
    if (action.type == ADD_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }
    if (action.type == DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type == GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.list
        return newState
    }
    return state
}

