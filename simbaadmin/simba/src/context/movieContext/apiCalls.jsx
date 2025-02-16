import { getMoviesStart,getMoviesFailure,getMoviesSuccess } from "./MovieActions"
import axios from "axios";

export const getMovies = async (dispatch) => {

  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:8800/api/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        
      },
    });
    dispatch(getMoviesSuccess(res.data));
  }
   catch (err) {
    dispatch(getMoviesFailure());
  }
};

