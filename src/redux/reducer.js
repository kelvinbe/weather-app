const initialState = {
  results: null,
  forecastData: null,
  auth: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FORECAST":
      return { forecastData: action.data };

    case "GET_SEARCH":
      return { results: action.data };
  
       default:
      return state;
  }
};

export default rootReducer;
