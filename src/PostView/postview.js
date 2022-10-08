import React, { useEffect,useState} from 'react';
import sent from '../images/send.png';
import like from '../images/like.png';
import photo from '../images/photo.png';
import social from '../images/social-media.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

        

function Head() {
    return (
        <div className="head">
            <div className='h' id="logo"><img src={social} alt="loading...."></img>
            <h2>Post</h2></div>
            <Link to='/upload'><div className="h"><img src={photo} alt="loading...."></img></div></Link>
        </div>
    );
};

const Post = (props)=>{
    const arrayBufferToBase64=(buffer)=> {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    var base64Flag = 'data:image/jpeg;base64,';
    var imageStr = arrayBufferToBase64(props.postInfo.postImage.data.data);
    return (
        <div className='postupdate'>
            <div id='top'>
                <div id='top-left'><h3>{props.postInfo.name}</h3>
                <p>{props.postInfo.location}</p></div>
                <div id='top-right'><h3>...</h3></div>
            </div>
            <div id='middle1'><img src={base64Flag+imageStr} alt='loading...'></img></div>
            <div id='middle2'>
                <div id='middle2-left'><img src={like} alt="loading..."></img>
                    <img src={sent} alt='loading...'></img>
                    <p>{props.postInfo.like} likes</p>
                </div>
                <div id='middle2-right'><p>{props.postInfo.date}</p></div>
            </div>
            <div id='bottom'><h3>{props.postInfo.description}</h3></div>
        </div>
    );
}


export default function Postview() {
    var count=0;
    const [user,setUser] = useState([]);

    useEffect(()=>{
        let fetchPost = ()=>{
            axios.get('https://posttodayserver.herokuapp.com/post')
            .then(response => {
                console.log(response);
                setUser(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        fetchPost();
    },[]);

    return (
        <>
            <Head/>
            <div id='container'>
                {user.map(item => (<Post key={count++} postInfo={item}/>))}
            </div>
        </>
    );
}