
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../component/Loader';
import {Link} from "react-router-dom"

const Home = () => {
   const [error, setError]= useState("")
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async() =>{
    try{
        const {data} = await getaxios.get(`${import.meta.env.VITE_BURL})/users`)
       setUsers(data.users)
    }catch(e){
        console.log("catch");
        console.log(e.status)
        if (e.response.status=== 404){
            setError("page not found")
        }
    }
    finally{
        setLoading(false)
    }
  }

  useEffect(() => {
 
    getUsers();
  },[])

  if (loading) return <Loader />;
  if (error.length!=0){
    return<div className='text-danger'>{error}</div>
  }
  
return (
    <>
    <div>
      <h2> Users</h2>
      {users.map(user =>(
        <div className='user' key={users._id}>
            <h3>{users.userName}</h3>
            <h4>{users.email}</h4>
        </div>
     ) )}
      </div>

      <div>
      <table className="table table-striped table-bordered border-primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
    
export default Home