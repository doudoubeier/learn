import { put, takeEvery } from 'redux-saga/effects'
import { GET_LIST_OTHER } from './actionTypes'
import { getListOtherAction } from './actionCreators'
// generator函数
function* mySagas() {
    // 等待捕获action
    yield takeEvery(GET_LIST_OTHER, getList)

}

function* getList() {
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
        const action = getListOtherAction(res.data.list)
        put(action)
    }, 1000)
}
export default mySagas;