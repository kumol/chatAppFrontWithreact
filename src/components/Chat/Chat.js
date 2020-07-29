import React , {useState, useEffect } from 'react';
import './Chat.css';
import queryString from 'query-string';
import io from 'socket.io-client';
let socket;
const Chat = ({location })=>{
    const [name,setName]=useState('');
    const [room,setRoom] = useState("");
    const ENDPOINT = 'localhost:3000/user';
    useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);
        socket.emit('join',{name,room});
    },[ENDPOINT,location.search])
    return (
        <h1>Chat</h1>
    )
}
export default Chat;