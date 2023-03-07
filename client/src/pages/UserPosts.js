import React from "react";

const UserPosts = ({ postList }) => {
  return (
    <div>
      {postList &&
        postList.map((poem) => (
          <div key={poem._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {poem.postTitle}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: poem.description }} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Comment</button>
          </div>
        ))}
    </div>
  );
};

export default UserPosts;
