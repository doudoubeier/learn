import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}


export const Color = props => {
    /**
     * @description: useReducer
     * @param {*} reducerFn reducer函数 根据类型判断返回state
     * @param {*} initState 初始化的state
     * @return {*} 最新的state和dispatch函数
     */
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}