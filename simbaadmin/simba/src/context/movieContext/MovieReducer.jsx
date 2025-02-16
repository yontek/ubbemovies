const MovieReducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES_START":
        return {
          movies: [],
          isFetching: true,
          error: false,
        };
      case "GET_MOVIES-SUCCESS":
        return {
          movies: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_MOVIES-FAILURE":
        return {
          movies:[],
          isFetching: false,
          error: true,
        };
     
      default:
        return { ...state };
    }
  };
  
  export default MovieReducer;