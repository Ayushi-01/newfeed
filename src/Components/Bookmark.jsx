import React from "react";
import {connect} from 'react-redux'

const Bookmark =(props)=>{
    
    return(
        <>
        <p>Book marked items</p>
        
        <ul>
  {props.bookMarkData?.map((item, index) => (
    <li key={index}>
      {item.title} - <button onClick={() =>props.removeBookmark(index)}>Remove</button>
    </li>
  ))}
</ul>
        </>
    )
}
const  mapStateToProps=(state)=>{
    console.log("stat",state)
    return{
        bookMarkData:state.simpleReducer.result
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
