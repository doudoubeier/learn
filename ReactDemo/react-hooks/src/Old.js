import React, { Component } from 'react';
// 常规class写法
class Old extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.addClick = this.addClick.bind(this)
    }
    render() {
        return (
            <div>
                <div>计数器: {this.state.count}</div>
                <button onClick={this.addClick}>+1</button>
            </div>
        );
    }
    componentDidMount() {
        console.log('componentDidMount阶段，count值为' + this.state.count)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate阶段，count值为' + this.state.count)
    }
    addClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Old;