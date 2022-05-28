import {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function List({token,setError}){
    const navigate = useNavigate();
    const [list,setList] = useState([])
    useEffect(()=>{
        axios
        .get('http://localhost:5000/', {headers: {'Authorization': `Basic ${token}`},})
        .then(data=>{setList(data.data)})
        .catch(err=>{
            setError(err)
            navigate("/error")
        })
    },[])
    return (
        <div>{list.map((el,index)=>{return (<div key={index}>{el}</div>)})}</div>
    )
}

export default List;