// import * as types from "./actionType"

// const intialState = {
//     users: [],
//     user: {},
//     loading: false
// }

// const usersReducers = (param = intialState, action) => {
//     switch (action.type) {
//         case types.GET_USERS:
//             return {
//                 ...param,
//                 users: action.payload,
//                 loading: false,
//             };
//         case types.DELETE_USER:
//         case types.ADD_USERS:
       
//             return {
//                 ...param,
//                 loading: false,
//             };
//         case types.GET_SINGLE_USER :
//             return {
//                 ...param,
//                 user: action.payload,
//                 loading: false,
//             };

//         default:
//             return param;
//     }
// }

// export default usersReducers