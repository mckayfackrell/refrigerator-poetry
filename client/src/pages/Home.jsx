import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import UserPosts from "./UserPosts";
const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const postList = data?.allPosts || [];
  return (
    <main>
      <div className="container blogroll-posts blogroll-posts-home">
          {loading}
          <UserPosts postList={postList} />
      </div>
    </main>
  );
};
export default Home;
