import * as api from "../api/api";

// action types

const FETCHING_BADGES = "badges/fetching";
const FETCHED_BADGES = "badges/fetched";
const FETCH_BADGES_ERROR = "badges/fetch/error";
const CHANGING_ACTIVE_BADGE = "badges/change/active";
const CHANGED_ACTIVE_BADGE = "badges/changed/active";
const CHANGING_ACTIVE_BADGE_ERROR = "badges/change/active/error";
const SELECT_BADGE = "badges/select";

// initial state

const INITIAL_STATE = {
  fetching: false,
  badges: [],
  changingActive: false,
  activeBadge: null,
  fetchError: false,
  changeError: false,
  selectedBadge: null
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
      let selectedBadge = state.selectedBadge;
      if (!selectedBadge) {
        selectedBadge = activeBadge;
      }
      return {
        ...state,
        fetching: false,
        badges: action.payload,
        activeBadge,
        selectedBadge
      };
    case FETCH_BADGES_ERROR:
      return { ...state, fetching: false, fetchError: true };
    case CHANGING_ACTIVE_BADGE:
      return { ...state, changingActive: true };
    case CHANGED_ACTIVE_BADGE:
      return { ...state, changingActive: false };
    case CHANGING_ACTIVE_BADGE_ERROR:
      return { ...state, changingActive: false, changeError: true };
    case SELECT_BADGE:
      return { ...state, selectedBadge: action.payload };
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

export function changeActiveBadge(userId, badgeId) {
  return async dispatch => {
    dispatch({ type: CHANGING_ACTIVE_BADGE });
    try {
      const user = await api.changeActiveBadge(userId, badgeId);
      dispatch({ type: FETCHED_BADGES, payload: user.badges });
      dispatch({ type: CHANGED_ACTIVE_BADGE });
    } catch {
      dispatch({ type: CHANGING_ACTIVE_BADGE_ERROR });
    }
  };
}

export function selectBadge(badge) {
  return {
    type: SELECT_BADGE,
    payload: badge
  };
}
