import {TOGGLE_VISIBLE_PROFILE} from "./types"

const initalState = {
    firstName: "firstName",
    lastName: "lastName",
    phone:"8-999-999-99-99",
    isVisible: true,
};

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
        return { ...state, isVisible: !state.isVisible };
      default:
        return state;
    }
  };
  
