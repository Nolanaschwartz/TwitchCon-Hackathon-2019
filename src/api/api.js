import axios from "axios";

const API_BASEURL = process.env.REACT_APP_API_BASEURL;

export async function fetchBadgesByUser(userId) {
  // Always this user for now
  userId = "LithHarbor";

  const data = await axios.get(API_BASEURL + "/users/" + userId);

  return data.data;
}

export async function changeActiveBadge(userId, badgeId) {
  userId = "LithHarbor";

  const userData = await axios.get(API_BASEURL + "/users/" + userId);
  const user = userData.data;

  for (var badge in user.badges) {
    if (badge.active) {
      badge.active = false;
    }

    if (badge.id === badgeId) {
      badge.active = true;
    }
  }

  console.log(user);
}
