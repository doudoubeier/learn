import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index.js'
import List from './Pages/List.js'
import Home from './Pages/Home'
function AppRouter() {
    return (
        <Router>
            <ul>
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/123">列表</Link> </li>
            </ul>
            {/* exact精准匹配 去掉后任何地址都可以打开index */}
            <Route path="/" exact component={Index} />
            {/* 路由传值 */}
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home}></Route>

        </Router>
    );
}
export default AppRouter;