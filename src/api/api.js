import axios from "axios";

const API_BASEURL = process.env.REACT_APP_API_BASEURL;

export async function fetchBadgesByUser(userId) {
  // Always this user for now
  userId = "LithHarbor";

  const data = await axios.get(API_BASEURL + "/users/" + userId);

  return data.data;
}
