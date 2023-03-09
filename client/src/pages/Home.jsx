import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import AllPosts from "./AllPosts";
import magnetImg from "../assets/magnet.jpg";


const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const postList = data?.allPosts || [];

  return (
    <main className="relative w-full h-screen wallpaper">
      <br></br>
      <div className="container blogroll-posts blogroll-posts-home">
        {loading}
        <AllPosts postList={postList} />
      </div>
    </main>
  );
};

export default Home;
