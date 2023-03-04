import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';
import { CREATE_POST } from '../utils/mutations';

const EditPost = (props) => {

  // Form Handling
  const [formData, setFormData] = useState({
    postTitle: '',
    description: ''
  }); 


  const welcomeMsg = 'Click on word magnets to start your poem!';

  // Set poemBody state
  const[poemBody, writePoem] = useState(welcomeMsg);

  // Update poemBody state
  function moveMagnet(word) {

      console.log(word);
      const wrappedWord = '<span className="magnet">' + word + '</span>';

      if(poemBody === welcomeMsg) {
          writePoem(wrappedWord);
          setFormData({ ...formData, description: wrappedWord });
      } else {
          writePoem((prev) => prev + wrappedWord);
          // setFormData( formData.description + wrappedWord );
          setFormData({ ...formData, description: poemBody + wrappedWord });
      }
  }

  let navigate = useNavigate();

  const [createPost, { error }] = useMutation(CREATE_POST);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }; 

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createPost({
        variables: { ...formData },
      }); 

    console.log('id: ' + data.createPost._id);

    // navigate(`/post/${data.createPost._id}`);
    navigate(`/`);

    } catch (err) {
    console.error(err);
    }

  };

  return (
   
    <div className="poem-interface-outer">
            
            <div className="create-a-post container">

                <div className="collapse-outer">
                    <h3 className="collapse open">CLOSE X</h3>
                    <div id="words-finder" className="collapse-content">
                        <form id="words-finder-form">
                            <div className="form-block display-flex justify-space-between query-builder form-group">

                                <h3>FIND WORDS:</h3>

                                <select id="words-behavior" className="select">
                                    <option value="rel_trg">about</option>
                                    <option value="ml">like</option>
                                    <option value="rel_rhy">rhyming with</option>
                                </select>

                                <input type="text" id="words-subject" className="form-input" placeholder="subject" />
                                <button id="find-words-btn" className="btn btn-submit">GO</button>

                            </div>
                        </form>
                        <div id="word-list-dynamic"></div>
                    </div>
                </div>

                <div className="collapse-outer">
                    <h3 className="collapse open">CLOSE X</h3>
                    <div className="collapse-content">
                        <div id="word-list-static">
                            <div id="static-fragments">
                                {
                                    props.staticfragments.map(item => (
                                        <button className="magnet" key={item.id} onClick={() => moveMagnet(item.name)}>{item.name}</button>
                                    ))
                                }
                            </div>
                            <div id="static-words">
                                {
                                    props.staticwords.map(item => (
                                        <button className="magnet" key={item.id} onClick={() => moveMagnet(item.name)}>{item.name}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div id="poem-container" className="empty">
                    <div dangerouslySetInnerHTML={{__html: poemBody}} />
                </div>

                <div id="help-buttons" className="text-right">
                    <button className="btn floating col-3" data-func="start-over">START OVER</button>
                </div>

                <form className="form update-a-post-form" data-id="usethepostidforthis" data-func="save" onSubmit={handleFormSubmit}>
                    <div className="form-group display-flex justify-content-space-between">
                        <input className="form-input" type="text" id="newpost-title" name="postTitle" placeholder="title of your poem" onChange={handleInputChange} />
                        <input type="hidden" name="description" />
                        <button className="btn btn-submit floating" type="submit">SAVE</button>
                    </div>

                </form>
            </div>

        {error && <div>Something went wrong...</div>}

    </div>
    
  );
};

export default EditPost;