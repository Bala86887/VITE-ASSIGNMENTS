import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import User from "./User";
function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
   
    try {
      {
       let data=await axios({method:"get",url:"https://reqres.in/api/users"})
       setPosts(data.data.data)
       
       
      }
    } catch (error) {
      {
        /*Complete the missing code*/
      }
    }


  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
console.log(posts)
  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>

     {posts.map((elements)=>(
      <User {...elements} key={elements.id}/>
     ))}
    </div>
  );
}

export default Posts;
