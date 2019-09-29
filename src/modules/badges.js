// action types

const FETCHING_BADGES = "badges/fetching";
const FETCHED_BADGES = "badges/fetched";
const FETCH_BADGES_ERROR = "badges/fetch/error";

// initial state

const INITIAL_STATE = {
  fetching: false,
  badges: [],
  fetchError: false
};

// reducer

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_BADGES:
      return { ...state, fetching: true };
    case FETCHED_BADGES:
      return { ...state, fetching: false, badges: action.payload };
    default:
      return state;
  }
}

// actions

export function fetchBadges() {
  return dispatch => {
    dispatch({ type: FETCHING_BADGES });
    // TODO: Api call
    dispatch({ type: FETCHED_BADGES, payload: [{ id: "1" }] });
  };
}
