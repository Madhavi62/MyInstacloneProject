import React from "react";
import { useNavigate } from 'react-router-dom';
import "./upload.css";

const Upload = () => {
    const navigate = useNavigate();

   
    const handleSubmit = async (e) => {
       
        e.preventDefault()
        let data =e.target
        let formData=new FormData(data)
        await fetch('https://instaclonebackend-yz2f.onrender.com/posts',{method:"POST",body:formData})
        .then(res=> res.json()).then((d)=>{
            alert("post successful")//insta-backend-3sch.onrender.com
            console.log(d);
        }).catch((e)=>{console.log(e.message)}).finally(()=>{navigate("/InstaClone")})
    }
    return (
        <div className="uploadcontainer"><center>
            <form id="changes" onSubmit={(e)=>handleSubmit(e)}>
                <input type="file" required placeholder="file" name="PostImage"  className="input1" id="image"/><br/>
                <input type="text" required placeholder="author" name="name" className="input1" /><br/>
                <input type="text" required placeholder="enter location" name="location" className="input1" /><br/>
                <input type="text" required placeholder="post description" name="description" className="input1"  /><br/>
                <button class="upload" type="submit">Upload Post</button><br/>
            </form>
            </center>
        </div>
    )
}
export default Upload;