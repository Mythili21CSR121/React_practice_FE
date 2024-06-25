import React, { useState } from 'react'

const GetNameAge = () => {
    const[user, setUser]=useState({names: "", age: 0})
    const handleNameChange=(e)=>{
        setUser({...user, names:e.target.value})
    }
    const handleAgeChange=(e)=>{
        setUser({...user, age:e.target.value})
    }
  return (
    <div>
        Name:
      <input type='text' value={user.names} onChange={handleNameChange} />
      Age:
      <input type='text' value={user.age} onChange={handleAgeChange} />
      <p>
        Name:{user.names};
        Age:{user.age};
      </p>
    </div>
  )
}

export default GetNameAge