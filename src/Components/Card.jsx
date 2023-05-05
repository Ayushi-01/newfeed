import React from "react";

 const Card =(props)=>{
   return(
    <>
   <div className="row card-container">
   {
        props.data?.map((item)=>{
            return(
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                   
                      <img src={item.urlToImage} className ="card-img-top" alt ="Image not available"/>
                      <h5 className="card-title">{item.title}</h5>
                      <p class="card-text">{item.content}</p>
                      <a href={item.url}>Check Desciption</a>
                      <button className="btn btn-primary bookmarkBtn" onClick={()=>props.addBookmark(item) }>BookMark</button> 
                    </div>
                  </div>
                </div>
                       
            )
        })
    }
   </div>
   
    </>
   )
}
export default Card