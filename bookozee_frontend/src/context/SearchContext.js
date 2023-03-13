import { createContext } from "react";

const INIT_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INIT_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
  }
};
