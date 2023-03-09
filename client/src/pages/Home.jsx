import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import AllPosts from "./AllPosts";
import magnetImg from "../assets/magnet.jpg";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const postList = data?.allPosts || [];

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
        {loading}
        <AllPosts postList={postList} />
      </div>
    </main>
  );
};

export default Home;
