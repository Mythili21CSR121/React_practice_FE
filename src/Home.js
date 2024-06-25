import React, { useEffect, useState } from 'react'

function Home() {
    const[datas,setDatas]=useState([]);
  useEffect(()=>{
    const fetchDetails=async()=>{
      const data =await  fetch("https://jsonplaceholder.typicode.com/posts")
      const result =await data.json();
      console.log(result);
      setDatas(result);
    }
   fetchDetails();
  },[]);
  
  return (
    <div>
      This is Home page
      {
        datas.map((user)=>(
            <li key={user.id}>{user.title}</li>
        ))
      }
    </div>
  )
}

export default Home;