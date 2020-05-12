import axios from "axios";

export const URL = "http://localhost:3000";

export const guestbook = axios.create({
  baseURL: URL,
});

guestbook.defaults.headers.post["Content-Type"] = "application/json";
guestbook.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:3001/signup";
