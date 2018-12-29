const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

export default function orderReducer(state=initialState, action){
    switch (action.type){        
        case "ALL_ORDERS_PENDING":
            return {...state, isLoading: true}       
        case "ALL_ORDERS_FULFILLED":
            return {...state, isLoading: false, results: action.payload.data}       
        case "ALL_ORDERS_REJECTED":
            return {...state, isLoading: false, isError: true}       
        case "GET_ORDER":
            return {...state, data: action.payload}       
        default:
            return state
    }
}
