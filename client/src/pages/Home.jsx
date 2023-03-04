// import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import Dashboard from "./Dashboard";

const Home = () => {
  /* const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: "no-cache"
  }); */

  // const [allPosts, { error }] = useQuery(QUERY_POSTS);

  const { loading, data } = useQuery(QUERY_POSTS);

  const postList = data?.allPosts || [];

  //console.log(data);

  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold text-black">Home</h1>
            <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
              This is where a post will go
            </p>
          </div>
          <div className="card-body m-5">
            {loading}
            <Dashboard postList={postList} />
          </div>
        </div>
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
