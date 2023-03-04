import React from "react";

const Dashboard = ({ postList }) => {
  // if (!postList.length) {
  //   return <h3>No Poetry Yet</h3>;
  // }

  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
              Dashboard
            </h1>
            <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
              This is where a user can view all their posts
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
