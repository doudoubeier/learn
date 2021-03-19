import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    uid: 1,
                    title: '文章1'
                }, {
                    uid: 2,
                    title: '文章2'
                }, {
                    uid: 3,
                    title: '文章3'
                }
            ]
        }
        // 路由跳转 props.history.push
        // this.props.history.push('/home/')
    }
    render() {
        return (
            // <ul>
            //     {
            //         this.state.list.map((item, index) => {
            //             return (
            //                 <li key={index}>
            //                     <Link to={'/list/' + item.uid}>{item.title}</Link>
            //                 </li>
            //             )
            //         })
            //     }
            // </ul>
            // 重定向
            <Redirect to={'/home/'}></Redirect>
        );
    }
}

export default Index;