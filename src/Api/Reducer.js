const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET-DATA":
      state.articles = action.payload.articlesPay;
      return {
        ...state,
        isLoading: false,
      };

    case "ERROR":
      state.error = action.payload.error;
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
