import React from "react";

const UserPosts = ({ postList }) => {
  return (
    <>
      {postList &&
        postList.map((poem) => (
          <div key={poem._id} className="blogroll-post ">
            <h3 className="post-title display-flex justify-space-between-lg align-center">
              <span>{poem.postTitle}</span>
              <span className="meta">Posted by {poem.username} on {poem.createdAt}</span>
            </h3>
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: poem.description }} />
            </div>
            <div className="post-comments">
            {poem.comments.map((comments) => (
              <div key={comments._id}>
                <span>{comments.comment}</span>
                <span className="meta">Posted by {comments.username} on {comments.createdAt}</span>
              </div> 
            ))}
            </div>
            <div className="post-comment-button">
              <button className="btn comment-btn col-3">+ Add Comment</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserPosts;
