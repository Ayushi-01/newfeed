import React, {useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";

const  Login=(props) =>{
    const navigate = useNavigate();

    const [data,setData] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        navigate("/dashboard");
    }
    return(
        <div>
            <h1>Login</h1>
            <form  class="container py-5 h-100" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                <label className="form-label" >Email Address</label>
                    <input type="text" className="form-control" name={data.email} onChange={setData} value={data.email}/>

                </div>
                <div  class="form-outline mb-4">
                <label className="form-label">Password</label>
                    <input type="password" className="form-control"  onChange={setData} value={data.password} name={data.password}/>
                    
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

            </form>
        </div>
    )
} 
export default Login