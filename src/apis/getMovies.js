import axios from "axios";

const API_ENDPOINT =
  process.env.React_App_SERVER_API || "http://localhost:5000";
const API_KEY = process.env.React_App_Movie_DB_API_KEY;

export const getAllMovies = async () => {
  const { data } = await axios.get(`${API_ENDPOINT}/api/discover/all`);

  return data;
};
export const getPopularMovies = async () => {
  const { data } = await axios.get(`${API_ENDPOINT}/api/discover/popular`);
  return data;
};
export const getLatestMovies = async () => {
  const { data } = await axios.get(`${API_ENDPOINT}/api/discover/latest`);
  return data;
};
