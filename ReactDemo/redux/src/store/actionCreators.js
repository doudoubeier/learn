import { CHANGE_INPUT, ADD_LIST, DEL_ITEM, GET_LIST, GET_LIST_OTHER } from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addListAction = () => ({
    type: ADD_LIST
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

// export const getListAction = (list) => ({
//     type: GET_LIST,
//     list
// })

export const getListAction = () => {
    // 使用redux-thunk 返回函数 可进行异步操作
    return (dispatch) => { // 会自动传递dispatch
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
        //     console.log(res)
        // })
        let res
        setTimeout(() => {
            res = {
                "data": {
                    "list": [
                        '早上4点起床，锻炼身体',
                        '中午下班游泳一小时',
                        '晚上8点到10点，学习两个小时'
                    ]
                }
            }
            const action = getListAction(res.data.list)
            dispatch(action)
        }, 1000)

    }
}

export const getListOtherAction = (list) => ({
    type: GET_LIST_OTHER,
    list
})