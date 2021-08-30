import axios from "axios";

const API_ENDPOINT = process.env.React_App_Mobive_DB_Discover_Movie_API;
const API_KEY = process.env.React_App_Movie_DB_API_KEY;

export const getAllMovies = async () => {
  const sort_by = "revenue.desc";
  const { data } = await axios.get(API_ENDPOINT, {
    params: {
      api_key: API_KEY,
      sort_by,
    },
  });

  return data;
};
export const getPopularMovies = async () => {
  const sort_by = "popularity.desc";
  const { data } = await axios.get(API_ENDPOINT, {
    params: {
      api_key: API_KEY,
      sort_by,
    },
  });

  return data;
};
export const getLatestMovies = async () => {
  const sort_by = "release_date.desc";
  const { data } = await axios.get(API_ENDPOINT, {
    params: {
      api_key: API_KEY,
      sort_by,
    },
  });

  return data;
};
