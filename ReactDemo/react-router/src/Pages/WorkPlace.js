import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Money from './workPlace/Money'
import GetUp from './workPlace/GetUp'
class WorkPlace extends Component {
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
                            <Link to='/workPlace/money/'>money</Link>
                        </li>
                        <li>
                            <Link to='/workPlace/getUp/'>getUp</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <h3>技能展示</h3>
                    <Route path='/workPlace/money/' component={Money}></Route>
                    <Route path='/workPlace/getUp/' component={GetUp}></Route>
                </div>
            </div>
        );
    }
}

export default WorkPlace;