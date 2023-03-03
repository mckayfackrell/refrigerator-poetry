import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';
import { CREATE_POST } from '../utils/mutations';

const EditPost = () => {
// const { loading, data } = useQuery(QUERY_TECH);

//  const techList = data?.tech || [];

//  const formPostTitle = data?.postTitle;
//  const formPostText = data?.postTest;


  const [formData, setFormData] = useState({
    postTitle: '',
    description: ''
  }); 
  let navigate = useNavigate();

  const [createPost, { error }] = useMutation(CREATE_POST);



    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    }; 

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // console.log('formData:' + formData);

    try {
      const { data } = await createPost({
        variables: { ...formData },
      });

      console.log('id: ' + data.createPost._id);


      // ?
    /* navigate(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }  */

    

    navigate(`/post/${data.createPost._id}`);
    } catch (err) {
    console.error(err);
    }



    /* setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    }); */
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>New Post</h1>
      </div>
      <div className="card-body m-5">

     
            <form onSubmit={handleFormSubmit}>
            <label>Add a Title</label>
            <input name="postTitle" onChange={handleInputChange} />
            <label>Write a Poem </label>
            <textarea name="description" onChange={handleInputChange}></textarea>
            <button className="btn btn-danger" type="submit">SUBMIT</button>
            </form>
       

        
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default EditPost;


/* {loading ? (
    <div>Loading...</div>
  ) : (
    <form onSubmit={handleFormSubmit}>
      <label>Add a Title</label>
      <input name="poemTitle" onChange={handleInputChange} />
      <label>Write a Poem </label>
      <textarea name="poemText" onChange={handleInputChange}></textarea>
      <button className="btn btn-danger" type="submit">SUBMIT</button>
    </form>
  )} */