const initialState = {
    email:''
}

export default function storageReducer(state = initialState, action){
    switch(action.type){
        case 'GET-EMAIL':
            return{
                ...state,
                email:action.payload
            }
        default:
            return state
    }
}