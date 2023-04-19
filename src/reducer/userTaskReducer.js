export default function reducer(state, action){
    switch(action.type){
        case 'GET_ALL_TASK_REQUEST':
            return {...state, loading: true}
        case 'GET_ALL_TASK_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                tasks: action.payload
            }
        case 'GET_ALL_AREA_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}