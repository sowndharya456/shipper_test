import React, { useEffect, useState } from 'react';


export default function Home (){
    const [count,setCount]= useState(0);
    const [count1,setCount1]= useState(5);
    useEffect(()=>{
        console.log(count);
    });
    const incrementCount = (e)=>{
        setCount(count+1);
    }
    const incrementCount1 = (e)=>{
        setCount1(count1+1);
    }
    return(
        <div>
            <span>Hello home page :{count}</span>
            <button onClick ={(e)=>incrementCount1(e)}>increment count1</button>
            <button onClick ={(e)=>incrementCount(e)}>increment count</button>
        </div>
    )
}
