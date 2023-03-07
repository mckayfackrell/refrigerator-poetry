// import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import UserPosts from "./UserPosts";

const Home = () => {
  /* const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: "no-cache"
  }); */

  // const [allPosts, { error }] = useQuery(QUERY_POSTS);

  const { loading, data } = useQuery(QUERY_POSTS);

  const postList = data?.allPosts || [];

  //console.log(data);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Fridge Poetry</h1>
      </div>
      <div className="card-body m-5">
        {loading}
        <UserPosts postList={postList} />
      </div>
    </div>
  );
};

export default Home;

/* <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div> */

/* <li key={poem._id}>
  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
    {matchup.tech1} vs. {matchup.tech2}
  </Link>
</li> */
