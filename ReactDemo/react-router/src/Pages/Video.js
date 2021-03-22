import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'
import '../index.css'
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="topNav">
                    <ul>
                        <li>
                            <Link to="/video/reactPage">reactPage</Link>
                        </li>
                        <li>
                            <Link to="/video/flutter">flutter</Link>
                        </li>
                        <li>
                            <Link to="/video/vue">vue</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <h3>视频展示</h3>
                    <Route path="/video/reactPage/" component={ReactPage}></Route>
                    <Route path="/video/flutter/" component={Flutter}></Route>
                    <Route path="/video/vue/" component={Vue}></Route>
                </div>
            </div>
        );
    }
}

export default Video;