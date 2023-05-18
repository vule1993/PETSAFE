// const initialState = {
//   searchResult: [],
//   searchOption: "",
// };

// export const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_SEARCH_RESULT":
//       return {
//         ...state,
//         searchResult: action.payload.data,
//         searchOption: action.payload.selectedOption,
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  searchResult: [],
  searchOption: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULT":
      return {
        ...state,
        searchResult: action.payload.data,
        searchOption: action.payload.selectedOption,
      };
    default:
      return state;
  }
};
