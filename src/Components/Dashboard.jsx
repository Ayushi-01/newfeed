import React,{useEffect, useState } from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import { useNavigate } from "react-router-dom";
import Bookmark from './Bookmark';
const  Dashboard=(props)=>{
    
    const [data,setData] = useState([])
    const [bookmarks, setBookmarks] = useState([]);
    const [showBookMark,setShowBookMark] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchNews(){
            let response = await fetch ("https://newsapi.org/v2/everything?q=keyword&apiKey=f67daf471cd144918a6d813fc2b174a3")
            let result = await response.json()
            return result
        }
        fetchNews().then(data=>{
            setData(data)
        })
       
    },[])
    const addBookmark =(item)=>{
        setBookmarks([...bookmarks,item])
    }
    const bookMark=()=>{
        setShowBookMark({
            showBookMark:true

        })
        navigate("/bookmark");
        console.log(bookmarks)
        props.dispatch({type:'FETCH_DATA',payload:bookmarks})
    }
    const removeBookmark = (index) => {
        const newBookmarks = [...bookmarks];
        newBookmarks.splice(index, 1);
        setBookmarks(newBookmarks);
      }
    return(
        <div>
            <h1>Get the lastest upadtes</h1>
            <button onClick={(e)=>bookMark(e)}>Show BookMark list</button>
            {!showBookMark?<Card
            data={data&&data.articles}
            addBookmark={addBookmark}
            />:null
            }
            {
                showBookMark?<Bookmark
                bookmarks ={props.bookMarkData}
                removeBookmark ={removeBookmark}
                />:null
            }
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);