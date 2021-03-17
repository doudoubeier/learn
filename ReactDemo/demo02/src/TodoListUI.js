
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import { List, Input, Button } from 'antd'
// 无状态组件改变
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <Fragment>
//                 <div style={{ margin: '20px' }}>
//                     <Input placeholder="hello world" style={{ width: '250px', marginRight: '10px' }} onChange={this.props.changeInputVal} value={this.props.inputVal} />
//                     <Button type="primary" onClick={this.props.addList}>增加</Button>
//                 </div>
//                 {/* 方法需要参数传递时 用箭头函数调用 */}
//                 <List bordered dataSource={this.props.list} renderItem={(item, index) => (<List.Item onClick={() => this.props.delItem(index)}>{item}</List.Item>)} ></List>
//             </Fragment>
//         );
//     }
// }
// 无状态组件 不再继承任何类class 也没有state 就是一个函数 性能更高
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{ margin: '20px' }}>
                <Input placeholder="hello world" style={{ width: '250px', marginRight: '10px' }} onChange={props.changeInputVal} value={props.inputVal} />
                <Button type="primary" onClick={props.addList}>增加</Button>
            </div>
            {/* 方法需要参数传递时 用箭头函数调用 */}
            <List bordered dataSource={props.list} renderItem={(item, index) => (<List.Item onClick={() => props.delItem(index)}>{item}</List.Item>)} ></List>
        </Fragment>
    );
}

export default TodoListUI;