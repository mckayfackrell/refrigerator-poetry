import axios from "axios";

const search = async (query) =>
  //axios.get(`https://api.datamuse.com/words?${query}&max=25`);
  axios.get("https://api.datamuse.com/words" + query + "&max=40");
export default { search };
