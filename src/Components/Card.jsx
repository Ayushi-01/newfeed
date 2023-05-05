import React,{useState} from "react";

 const Card =(props)=>{
   return(
    <>
    {
        props.data?.map((item)=>{
            return(
                
                <div className="card" style={{width: 18 + 'rm'}}>
                <img src={item.urlToImage} alt ="Image not available"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                <a href={item.url}>Check Desciption</a>  
                <button onClick={()=>props.addBookmark(item) }>BookMark</button>                  
                </div>
                </div>
            )
        })
    }
   
    </>
   )
}
export default Card