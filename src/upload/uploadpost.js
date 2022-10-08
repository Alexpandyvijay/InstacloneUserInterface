import React, {useState} from "react";
import "./upload.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostUpload(){
    const navigate = useNavigate();
    const [info,setInfo] = useState({
        name : '',
        location : '',
        description : "",
        upload_file : null,
        like : 1
    })

    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',info.name);
        formData.append('location',info.location);
        formData.append('description',info.description);
        formData.append('upload_file',info.upload_file);
        try{
           await axios.post("https://posttodayserver.herokuapp.com/upload",formData);
        }catch{
            console.log("not posted");
        }
        navigate('/post');
    }
    return (
        <div className="upload">
            <form onSubmit={handleOnSubmit}>
                <input type='file' className='item1' name='upload_file' onChange={(e)=>{setInfo({...info,upload_file:e.target.files[0]})}}></input>
                <input type='text' placeholder="Author" className="item2" name='name' value={info.name} onChange={(e)=>{setInfo({...info,name:e.target.value})}}></input>
                <input type='text' placeholder="Location" className="item3" name='location' value={info.location} onChange={(e)=>{setInfo({...info,location:e.target.value})}}></input>
                <input type='text' placeholder="Description" className="item4" name='description' value={info.description} onChange={(e)=>{setInfo({...info,description:e.target.value})}}></input>
                <input type='submit' className='item5'></input>
            </form>
        </div>
    )
}