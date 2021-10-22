// Action types
const AUTH = "AUTH";
const LOGOUT = "LOGOUT";

// State
const initialState = {
  authData: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  if (action.type === AUTH) {
    localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
    return { ...state, authData: action?.data };
  }

  return state;
};

export default reducer;
