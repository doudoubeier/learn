import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index.js'
import './index.css'
// import List from './Pages/List.js'
// import Home from './Pages/Home'
import Video from './Pages/Video'
import WorkPlace from './Pages/WorkPlace'
function AppRouter() {
    let routeConfig = [
        { path: '/', title: '博客首页', exact: true, component: Index },
        { path: '/video/', title: '视频教程', exact: false, component: Video },
        { path: '/workPlace/', title: '职场技能', exact: false, component: WorkPlace }
    ]
    return (
        <Router>
            {/* 
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/123">列表</Link> </li>
                </ul>
                // exact精准匹配 去掉后任何地址都可以打开index
                <Route path="/" exact component={Index} />
                // 路由传值
                <Route path="/list/:id" component={List} />
                <Route path="/home/" component={Home}></Route>
            */}
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                    {/* <ul>
                        <li>
                            <Link to='/'>博客首页</Link>
                        </li>
                        <li>
                            <Link to='/video/'>视频首页</Link>
                        </li>
                        <li>
                            <Link to='/workPlace/'>职场技能</Link>
                        </li>
                    </ul> */}
                </div>
                <div className="rightMain">
                    {/* <Route path="/" exact component={Index}></Route>
                    <Route path="/video/" component={Video}></Route>
                    <Route path="/workPlace/" component={WorkPlace}></Route> */}
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <Route path={item.path} exact={item.exact} component={item.component} key={index}></Route>
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    );
}
export default AppRouter;