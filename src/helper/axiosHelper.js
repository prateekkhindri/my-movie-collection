import axios from "axios";

const api = "http://www.omdbapi.com/?apikey=6ae75855&";

export const fetchMovie = (title) => {
  // Call the server

  return axios.get(api + "t=" + title);
};

// 4c8be5cb
