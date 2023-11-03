import axios from "axios";
import { setPostDetails, setPosts, setPostSearch } from "../reducers/postReducers";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

export const getAllPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
        `${import.meta.env.VITE_API}/v1/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    );
    dispatch(setPosts(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};


export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
        `${import.meta.env.VITE_API}/v1/movie/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
    );
    dispatch(setPostDetails(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};


export const getPostSearch = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/v1/search/movie?page=1&query=${query}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
    );
    dispatch(setPostSearch(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};