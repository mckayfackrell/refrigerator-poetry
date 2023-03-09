import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import { QUERY_TECH } from '../utils/queries';
import { CREATE_POST } from "../utils/mutations";
import API from "../utils/API";
import WordList from "./WordList";
import Auth from '../utils/auth.js';

const EditPost = (props) => {

  // Get words from Datamuse API
  //const [dynamicWordList, queryDatamuse] = useState('Use the form above to get started');

  const [dynamicWordList, setResult] = useState([]);
  //const [searchTerm, setSearch] = useState('');

  const queryDatamuse = (query) => {
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  // onSubmit function
  const getWordsFromAPI = (e) => {
    e.preventDefault();

    //const apiParams = '?rel_rhy=loopy';

    console.log(apiFormData.listRule);
    console.log(apiFormData.listWord);

    var lr = "rel_trg";
    var lw = "poetry";

    if(!(apiFormData.listRule === '')) { lr = apiFormData.listRule; }
    if(!(apiFormData.listWord === '')) { lw = apiFormData.listWord; }

    const apiParams = "?" + lr + "=" + lw;

    queryDatamuse(apiParams);
  };

  const handleAPIinputChange = (event) => {
    const { name, value } = event.target;
    setAPIinputData({ ...apiFormData, [name]: value });
    //setSearch(event.target.value)
  };

  // const handleAPIinputChange = (e) => setSearch(e.target.value);

  // API Search Form Handling
  const [apiFormData, setAPIinputData] = useState({
    listRule: "",
    listWord: "",
  });

  /* const[dynamicWordList] = useState('placeholder');

  const queryDatamuse = async () => {
    const res = await fetch('https://api.datamuse.com/words?rel_rhy=happy&max=25');
    return res.json();
  }

  const { data, status } = useQuery('datamuseList', queryDatamuse);
  console.log(data); */

  // Form Handling
  const [formData, setFormData] = useState({
    postTitle: "",
    description: "",
  });

  const welcomeMsg = "Click on word magnets to start your poem.";

  // Set poemBody state
  const [poemBody, writePoem] = useState(welcomeMsg);

  // Update poemBody state
  function moveMagnet(word) {
    console.log(word);

    var wrappedWord = '<span class="magnet">' + word + '</span>';

    if (word === "LINEBREAK") {
        wrappedWord = '<span class="lineBR">X</span><br />';
    } 

    if (word === "start-over") {
      writePoem(welcomeMsg);
      setFormData({ ...formData, description: "" });
    } else {
      if (poemBody === welcomeMsg) {
        writePoem(wrappedWord);
        setFormData({ ...formData, description: wrappedWord });
      } else {
        writePoem((prev) => prev + wrappedWord);
        // setFormData( formData.description + wrappedWord );
        setFormData({ ...formData, description: poemBody + wrappedWord });
      }
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

    const usrInfo = Auth.getProfile();
    console.log("Current user: " + usrInfo.data.username);

    try {
      const { data } = await createPost({
        variables: {
          postTitle: formData.postTitle,
          description: formData.description,
          author: usrInfo.data.username,
          userId: usrInfo.data._id
         },
      });

      // was: variables: { ...formData },
      console.log("id: " + data.createPost._id);
      
    } catch (err) {
      console.error(err);
    } finally {
      // navigate(`/post/${data.createPost._id}`);
      navigate(`/dashboard`);
    }


  };

  return (
    <main className="relative w-full h-screen wallpaper">
      <div className="poem-interface-outer">
        <main>
          <div className="create-a-post container">
            <div>
              <br></br>
              {/* <div className="collapse-outer"> */}
              {/* <h3 className="collapse open">CLOSE X</h3> */}
              <div id="words-finder" className="collapse-content">
                <form id="words-finder-form" onSubmit={getWordsFromAPI}>
                  <div className="form-block display-flex justify-space-between query-builder form-group grid gap-2 grid-cols-4">
                    <h3>FIND WORDS:</h3>

                    <select
                      name="listRule"
                      id="words-behavior"
                      className="select"
                      onChange={handleAPIinputChange}
                    >
                      <option value="rel_trg">about</option>
                      <option value="ml">like</option>
                      <option value="rel_rhy">rhyming with</option>
                    </select>

                    <input
                      name="listWord"
                      type="text"
                      id="words-subject"
                      className="form-input"
                      placeholder="subject"
                      onChange={handleAPIinputChange}
                    />
                    <button id="find-words-btn" className="btn btn-submit">
                      GO
                    </button>
                  </div>
                </form>
                <div id="word-list-dynamic">
                  <WordList
                    dmWordList={dynamicWordList}
                    moveMagnet={moveMagnet}
                  />
                </div>
              </div>
            </div>

            <div>
              {/* <div className="collapse-outer"> */}
              {/* <h3 className="collapse open">CLOSE X</h3> */}
              <br></br>
              <div className="collapse-content">
                <div id="word-list-static">
                  <div id="static-fragments">
                    {props.staticfragments.map((item) => (
                      <button
                        className="magnet"
                        key={item.id}
                        onClick={() => moveMagnet(item.name)}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <div id="static-words">
                    {props.staticwords.map((item) => (
                      <button
                        className="magnet"
                        key={item.id}
                        onClick={() => moveMagnet(item.name)}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="poem-container" className="empty">
              <div dangerouslySetInnerHTML={{ __html: poemBody }} />
            </div>

            <div id="help-buttons" className="text-right">
              <button
                className="btn floating col-3 p-2"
                data-func="start-over"
                onClick={() => moveMagnet("start-over")}
              >
                START OVER
              </button>
            </div>

            <form
              className="form update-a-post-form"
              data-id="usethepostidforthis"
              data-func="save"
              onSubmit={handleFormSubmit}
            >
              <div className="form-group justify-content-space-between">
                <input
                  className="flex flex-col md:w-3/4 form-input p-3 col-span-5"
                  type="text"
                  id="newpost-title"
                  name="postTitle"
                  placeholder="title of your poem"
                  onChange={handleInputChange}
                />
                <input type="hidden" name="description" />
                <button className="btn btn-submit floating py-2 px-5 text-center" type="submit">
                  SAVE
                </button>
              </div>
            </form>

          </div>

          {error && <div>Something went wrong...</div>}
        </main>
      </div>
    </main>
  );
};

export default EditPost;
