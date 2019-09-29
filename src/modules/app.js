import * as db from "../db/db";

// action types

const APP_AUTHENTICATED = "app/authenticated";

// initial state

const INITIAL_STATE = {
  authenticated: false,
  authToken: null,
  isModerator: null,
  sharedId: null,
  user: { ...db.users[0] }
};

// reducer

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case APP_AUTHENTICATED:
      return { ...state, authenticated: true, ...action.payload };
    default:
      return state;
  }
}

// actions

export function authenticateUser(authToken, sharedId) {
  return {
    type: APP_AUTHENTICATED,
    payload: {
      authToken,
      sharedId
    }
  };
}
