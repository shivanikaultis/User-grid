import { dataSource } from '../dataSource';
const initState = dataSource;
const rootReducer =(state= initState, action) => {
    console.log('rootreducer action'+action);
    switch (action.type) {
        case 'ADD_ROW':
            return [ ...state, action.payload ]
        case 'DELETE_ROW': 
        let newState = state.filter(row =>{
            return action.payload !== row.id
        });
        return newState;
        default:
            return state;    
    }
}

export default rootReducer