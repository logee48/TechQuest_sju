import "./upload.css";
import Header from "../header";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";

const Upload = () => {
    const [name,setname] = useState("")
    const [desc,setdesc] = useState("")
    const [author,setauthor] = useState("")
    const [Category,setCategory] = useState("")
    // const [path,setpath] = useState("")

    const wat = async () => {
          const a = {
            Name:"name",
            Description:"desc",
            Category:"Category",
            Author:"author",
            Path:"test"
        }

        axios.post(`http://localhost:1234/repo`,a)
                .then((response) => console.log(response));

    }

  return (
    <div className="">
        <Header/>
      <h1>Upload Complete</h1>
      <div className="page-content">
        <div className="page-box">
          <h2>Create a New Repository</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e)=>{setname(e.target.value)}}/>
            <label htmlFor="description">Author:</label>
            <input id="description" onChange={(e)=>{setauthor(e.target.value)}}></input>
            <label htmlFor="description">Description:</label>
            <textarea id="description" onChange={(e)=>{setdesc(e.target.value)}}></textarea>
            <label htmlFor="description">Category:</label>
            <input id="description" onChange={(e)=>{setCategory(e.target.value)}}></input>
            <label htmlFor="description">File:</label>
            {/* <input id="description" type="file" onChange={(e)=>{setpath(e.target.value)}}></input> */}
            <button type="submit" onClick={wat}>Create</button>
          </form>
        </div>
        <div className="page-box">
          <h2>Previous Repositories</h2>
          <ul>
            <li>
              <a href="/repository/1">Repository 1</a>
              <p>Description for Repository 1</p>
            </li>
            <li>
              <a href="/repository/2">Repository 2</a>
              <p>Description for Repository 2</p>
            </li>
            <li>
              <a href="/repository/3">Repository 3</a>
              <p>Description for Repository 3</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Upload;