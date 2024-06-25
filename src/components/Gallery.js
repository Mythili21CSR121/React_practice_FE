import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [id, setId] = useState(""); // Add state for id
  const [data,setData] = useState([]);

  useEffect(()=>{
    const handleRead=() =>{
        axios.get("http://localhost:3001/users")
        .then((res) =>{
            setData(res.data)
            console.log(res.data);
        })
        .catch((e)=> {console.log('error: ${e}')});
      };
      handleRead();
  },[])

  const handlePost = () => {
    axios.post("http://localhost:3001/users", { name, about, imgUrl })
      .then(() => {
        alert("Data is stored successfully");
        setName("");
        setAbout("");
        setImgUrl("");
      })
      
      .catch((e) => { console.log(`Error: ${e}`) });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`) // Use id in the URL
      .then(() => {
        alert("Data is deleted successfully");
        setId("");
        setData(data.filter(item => item.id !== id));
      })
      .catch((e) => { console.log(`Error: ${e}`) });
  };
  // const handleDelete=()=>{

  // }
  const handleEdit=(userid)=>{
    setId(userid.id);
    setName(userid.name);
    setAbout(userid.about);
    setImgUrl(userid.imgUrl);
  }
  const handleUpdate=()=>{
    axios.put(`http://localhost:3001/users/${id}`,{name,about,imgUrl})
    .then(()=>{
      alert("data updated successfully");
    })
    .catch(()=>{alert("data not updated")})
  }
  return (
    <center>
      <div style={{ marginTop: "90px" }}>
        <form onSubmit={id ? handleUpdate:handlePost}>
      <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <label>About:</label>
        <input type='text' value={about} onChange={(e) => setAbout(e.target.value)} />

        <label>ImageUrl:</label>
        <input type='text' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
        <button>{id?"UPDATE":"POST"}</button>
        </form>
        {/* <button onClick={handleRead}>Read</button> */}
        {
            data.map((i)=>(
                <li  key={i.id}>
                    Name: {i.name}<br/>
                    About: {i.about}
                    <br />
                    Image: <img src={i.imgUrl} alt='sk' />
                    <button onClick={()=>{handleEdit(i)}}>Edit</button>
                    <button onClick={()=>handleDelete(i.id)}>Delete</button>
                    <br/>
                    </li>
                    
            ))
        }
      </div>
    </center>
  );
}

export default Gallery;
