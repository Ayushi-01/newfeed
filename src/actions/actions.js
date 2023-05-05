// import {FETCH_DATA} from '../reducers/simpleReducer'
// export const simpleAction =(data)=>{
//     return function (dispatch){
//         fetch("https://fakestoreapi.com/products").then((response)=>{
//             // console.log("aaaaaaaaaa",response.json())
//             dispatch({ type:'FETCH_DATA',payload:response.json()})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }

// }

export const addArticle =(payload)=>{
    return { type: 'FETCH_DATA', payload };
}