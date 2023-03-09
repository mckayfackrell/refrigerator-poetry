import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERBYID } from "../utils/queries";
import UserPosts from "./UserPosts";
import Auth from '../utils/auth.js';
import magnetImg from "../assets/magnet.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const user = Auth.getProfile();
  console.log(user.data._id);
  const usrId = user.data._id;

  const { loading, data } = useQuery(QUERY_USERBYID, {
    variables: { id: usrId },
  });
  const userData = data?.userbyid || [];

  //console.log(userData);


/*   const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USERBYID : QUERY_USERBYID, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {}; */

  if (Auth.loggedIn()) {
    return (


      <main
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${magnetImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <br></br>
      <div className="container blogroll-posts blogroll-posts-home">
      <h3 className="bg-white p-3">Welcome, {user.data.username}!</h3>
        {loading}
        {userData ? (
          <></>
          ) : (
            <div className="bg-white p-5"><Link to="/post" className="hover:underline underline">Create your first poem</Link> to get started!</div>
        )}
        <UserPosts userData={userData} poemData={userData.posts} />
      </div>
    </main>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user.data?.username) {
    return (
      <h4>You need to log in to access this page.</h4>
    );
  }

  return (
    <div>
    </div>
  );


// Viewing {userParam ? `${user.username}'s` : 'your'} dashboard.


/* 
  // if (!postList.length) {
  //   return <h3>No Poetry Yet</h3>;
  // }

  // const { userId } = useParams();
  const user = Auth.getProfile();
  console.log(user.data._id);
  const usrId = user.data._id;

  const { loading, data } = useQuery(QUERY_USERBYID, {

    variables: { id: usrId },

  });
  const userData = data?.userbyid || [];

  //const [userDataObj] = useState([userData]);
  
  if(userData) {
    return (
      <main>
          <div className="container blogroll-posts blogroll-posts-home">
            <h1 className="text-4xl sm:text-4xl font-bold text-black pt-4">
              Your Posts
            </h1>
              {loading}
              <UserPosts userData={userData} />
              
          </div>
      </main>
    );
  } else {
    return (
      <div>Write your first poem to get started!</div>
    );
  }*/
}; 

export default Dashboard;
