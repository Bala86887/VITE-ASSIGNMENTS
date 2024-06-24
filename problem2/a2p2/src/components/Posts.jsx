import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true)
     try {
      {
        let data=await axios({method:"get",url:"https://reqres.in/api/users"})
       
  setPosts(data.data.data)
  setLoading(false)

       
      }
    } catch (error) {
      {
        error(true)
        setError(false)
      }
    }
  }

  useEffect(function(){
    fetchAndUpdateData()
  },[])



  // if (loading) {
  //   return <LoadingIndicator />;
  // }

  // if (error) {
  //   return <ErrorIndicator />;
  // }

  return (
    <div>
      <h1>List of Posts</h1>
    
{posts.map((ele)=>(
  <Post {...ele}/>


))}
    </div>
  );
}

export default Posts;
