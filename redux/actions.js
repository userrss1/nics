// import * as types from "./actionType"
// import axios from "axios";
// import Cookies from 'cookies'

// export async function getServerSideProps({ req, res }) {
//     const cookies = new Cookies(req, res)
//     let err = ''
//     let status = false
  
  
//     let token1 = null
   
//     if (cookies.get('access_token')){
//          token1 = cookies.get('access_token')
//     }else{
//          token1 = null
//     }
  
//     // await getBody('http://192.168.1.101:8081/api/login/');
  
  
  
  
//     var raw = JSON.stringify({
//       "status": "approved"
//     });
  
  
//     const { data } = await axios('http://192.168.1.101:8000/sa/all_user',
//       {
//         headers: { 'Content-Type': 'application/json', 'accept': 'application/json', "Authorization": `Bearer ${token1}` },
//         mode: 'cors', method: 'POST', data: raw
//       });
  
//     console.log(data)
  
  
   
  
  
  
  
//     console.log(token1)
  
  
  
//     return {
  
//       props: {
//         token1, data
  
  
//       }
//     };
//   }
  


// const getUsers = (users) => ({
//      type: types.GET_USERS,
//      payload: users,

// });

// const userDeleted = () => ({
//     type: types.DELETE_USER,
 

// });

// const userAdded = () => ({
//     type: types.ADD_USERS,
 

// });

// const getUser = (user) => ({
//     type: types.GET_SINGLE_USER,
//     payload: user,
    
 

// });


// const userUpdated = () => ({
//     type: types.UPDATE_USERS,
 

// });

// export const loadUsers = () => {
//      return function (dispatch){
//          axios.get("http://localhost:5000/user").then((resp) => {
//              console.log("LOAD USER", resp)
//              dispatch(getUsers(resp.data))
//          })
//          .catch((error) => console.log(error))
//      }
// }


// export const deleteUser = (id) => {
//     return function (dispatch){
//         axios.delete(`http://localhost:5000/user/${id}`).then((resp) => {
//             console.log("resp", resp)
//             dispatch(userDeleted())
//             dispatch(loadUsers())
//         })
//         .catch((error) => console.log(error))
//     }
// }

// export const AddUsers = (user) => {
    
//     return function (dispatch){
//         axios.post("http://localhost:5000/user", user).then((resp) => {
//             console.log("resp", resp)
//             dispatch(userAdded());
//             dispatch(loadUsers())

//         })
//         .catch((error) => console.log(error))
//     }
// }

// export const getSingleUser = (id) => {
//     return function (dispatch){
//         axios.get(`http://localhost:5000/user/${id}`).then((resp) => {
//             console.log("resp", resp)
//             console.log("id", id)
//             dispatch(getUser(resp.data))
           
           
//         })
//         .catch((error) => console.log(error))
//     }
// }


// export const updateUser = (user) => {
//     return function (dispatch){
//         axios.put(`http://localhost:5000/user`, user).then((resp) => {
//             console.log("UPDATE USER", resp)
//             dispatch(userUpdated())
//             dispatch(loadUsers())
           
           
//         })
//         .catch((error) => console.log(error))
//     }
// }