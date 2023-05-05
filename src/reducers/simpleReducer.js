export default (state={},action)=>{
    switch(action.type){
        case 'FETCH_DATA':
            return {
                result:action.payload
            }
            default:
                return state
    }
   
}