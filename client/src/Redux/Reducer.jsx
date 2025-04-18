const initialState = {
    id:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'add' : 
            return {...state, [state.id] :action.field}
        default : 
            return state
            

    }
}

export default reducer