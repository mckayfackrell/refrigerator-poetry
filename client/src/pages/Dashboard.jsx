import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_USERBYID } from "../utils/queries";
import UserPosts from "./UserPosts";

const Dashboard = () => {
  // if (!postList.length) {
  //   return <h3>No Poetry Yet</h3>;
  // }

  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_USERBYID, {
    variables: { id: userId },
  });
  const postList = data?.allPosts || [];

  return (
    <main className="relative w-full h-screen wallpaper">
      <div className="container blogroll-posts blogroll-posts-home">
        {loading}
        <UserPosts postList={postList} />
      </div>
    </main>
  );
};

export default Dashboard;
