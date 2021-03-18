const defaultState = {
    inputVal: 'hello',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type == 'change_input') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    if (action.type = 'add_list') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputVal)
        newState.inputVal = ''
        return newState
    }
    return state
}