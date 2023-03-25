import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  startingDate: undefined,
  endingDate: undefined,
  options: {
    minPrice: 0,
    maxPrice: undefined,
    adultsNumber: 0,
    childsNumber: 0,
    roomsNumber: 0,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

export const SearchReducer = (state, action) => {
  //
  switch (action.type) {
    case "NEW_SEARCH":
      return action.state;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

// context provider
export const SearchContextProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(SearchContext, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        startingDate: state.startingDate,
        endingDate: state.endingDate,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
