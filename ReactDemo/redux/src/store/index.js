import { createStore, applyMiddleware, compose } from 'redux'; // 引入createStore方法 需要使用中间件(在dispath一个action之后 到达reducer之前进行操作时)必须引入applyMiddleware
import reducer from "./reducer";
// 中间件使用reduxthunk增强
// import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import mySagas from './sagas';
const sagaMiddleWare = createSagaMiddleWare();
// 官网使用 const store = createStore(reducer,applyMiddleware(thunk))
// 但redux_devtools_extension已经占用了第二个参数 采用另一种办法 使用增强函数compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))
const store = createStore(reducer, enhancer)
sagaMiddleWare.run(mySagas)
// 创建saga中间件
// store必须是唯一的
// 使用redux devtools window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// state状态初始值 window.STATE_FROM_SERVER
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // 创建数据存储仓库
export default store;