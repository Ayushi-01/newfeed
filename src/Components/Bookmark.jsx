import React from "react";
import {connect} from 'react-redux'

const Bookmark =(props)=>{
    
    return(
        <>
    <div className="boomark-container">
    <p>Book marked items</p>
        
        <ul>
  {props.bookMarkData?.map((item, index) => (
    <li key={index}>
      {item.title} - <button className="btn btn-primary" onClick={() =>props.removeBookmark(index)}>Remove</button>
    </li>
  ))}
</ul>
    </div>
       
        </>
    )
}
const  mapStateToProps=(state)=>{
    return{
        bookMarkData:state.simpleReducer.result
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
