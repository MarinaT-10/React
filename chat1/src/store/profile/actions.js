import {INCREMENT, DECREMENT, TOGGLE_VISIBLE_PROFILE} from "./types"

export const increment = () => {
    return { type: INCREMENT};
};

export const decrement = () => {
    return { type: DECREMENT};
};

export const toggleVisibleProfile = () => {
    return { type: TOGGLE_VISIBLE_PROFILE};
};
