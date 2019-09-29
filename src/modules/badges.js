import * as api from "../api/api";

// action types

const FETCHING_BADGES = "badges/fetching";
const FETCHED_BADGES = "badges/fetched";
const FETCH_BADGES_ERROR = "badges/fetch/error";
const CHANGING_ACTIVE_BADGE = "badges/change/active";
const CHANGING_ACTIVE_BADGE_ERROR = "badges/change/active/error";

// initial state

const INITIAL_STATE = {
  fetching: false,
  badges: [],
  activeBadge: null,
  fetchError: false
};

// reducer

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_BADGES:
      return { ...state, fetching: true };
    case FETCHED_BADGES:
      let activeBadge = null;
      action.payload.map(item => {
        if (item.active) {
          activeBadge = item;
          return item;
        }
        return null;
      });
      return { ...state, fetching: false, badges: action.payload, activeBadge };
    case FETCH_BADGES_ERROR:
      return { ...state, fetching: false, fetchError: true };
    default:
      return state;
  }
}

// actions

export function fetchBadges(userId) {
  return async dispatch => {
    dispatch({ type: FETCHING_BADGES });
    try {
      const data = await api.fetchBadgesByUser(userId);
      dispatch({ type: FETCHED_BADGES, payload: data.badges });
    } catch {
      dispatch({ type: FETCH_BADGES_ERROR });
    }
  };
}
