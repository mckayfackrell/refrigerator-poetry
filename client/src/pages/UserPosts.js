import React from 'react';

const UserPosts = ({ postList }) => {
  if (!postList.length) {
    return <h3>No Poetry Yet</h3>;
  }

  return (
    <div>
      {postList &&
        postList.map((poem) => (
          <div key={poem._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {poem.postTitle} 
            </h4>
            <p>{poem.description}</p>
          </div>
        ))}
    </div>
  );
};

export default UserPosts;
