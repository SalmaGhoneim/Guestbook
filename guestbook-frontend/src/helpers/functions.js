import { guestbook } from "./constants";

export const signupRequest = (userData) => {
  let requestURL = `/users/signup`;
  return new Promise((resolve, reject) => {
    guestbook
      .post(requestURL, userData)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getMessages = () => {
  let requestURL = `/messages`;
  return new Promise((resolve, reject) => {
    guestbook
      .get(requestURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const editMessage = (id, edited) => {
  let requestURL = "/messages/" + id;
  console.log(edited);
  return new Promise((resolve, reject) => {
    guestbook
      .patch(requestURL, edited)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createMessage = (text) => {
  let requestURL = "/messages/";
  return new Promise((resolve, reject) => {
    guestbook
      .post(requestURL, text)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteRequest = (id) => {
  let requestURL = "/messages/" + id;
  return new Promise((resolve, reject) => {
    guestbook
      .delete(requestURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
