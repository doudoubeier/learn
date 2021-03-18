import React from 'react';
// 引入连接器
import { connect } from 'react-redux'

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = store.getState()
//         // this.inputChange = this.inputChange.bind(this)
//     }
//     render() {
//         let { inputChange, inputVal, addList, list } = this.props;
//         return (
//             <div>
//                 <input type="text" value={inputVal} onChange={inputChange} />
//                 <button onClick={addList}>新增</button>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li key={index}>{item}</li>
//                         })
//                     }

//                 </ul>
//             </div>
//         );
//     }

// inputChange(e) {
//     console.log(e.target.value)
// }
// }

const TodoList = (props) => {
    let { inputChange, inputVal, addList, list } = props;
    return (
        <div>
            <input type="text" value={inputVal} onChange={inputChange} />
            <button onClick={addList}>新增</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }

            </ul>
        </div>
    );
}

// 建立映射关系
const stateToProps = (state) => {
    return {
        inputVal: state.inputVal,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange: (e) => {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        addList: () => {
            let action = {
                type: 'add_list',
            }
            dispatch(action)
        }
    }
}

// 使用连接器进行暴露
export default connect(stateToProps, dispatchToProps)(TodoList)