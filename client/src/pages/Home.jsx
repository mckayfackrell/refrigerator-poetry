import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import UserPosts from "./UserPosts";
const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const postList = data?.allPosts || [];
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
      </div>
      <div className="card-body m-5">
        {loading}
        <UserPosts postList={postList} />
      </div>
    </div>
  );
};
export default Home;
