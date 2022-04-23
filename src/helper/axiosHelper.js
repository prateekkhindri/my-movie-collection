import axios from "axios";

const api = "https://www.omdbapi.com/?apikey=4c8be5cb&";

export const fetchMovie = (title) => {
  // Call the server

  return axios.get(api + "t=" + title);
};

// 4c8be5cb

// 6ae75855
