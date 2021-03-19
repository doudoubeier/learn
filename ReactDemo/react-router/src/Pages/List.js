import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>{this.state.id} -- list</div>
        );
    }
    // 接受传值
    componentDidMount() {
        // 取值在this.props.match对象中
        this.setState({
            id: this.props.match.params.id
        })
    }
}

export default List;