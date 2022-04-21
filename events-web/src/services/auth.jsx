import axios from "axios";

export const signIn = async ({ email, password }) => {
  return axios
    .post(`http://localhost:3001/users/auth/logIn`, {
      email,
      password,
    })
    .then((res) => res.data);
};

export const signUp = async ({ email, password }) => {
  return axios
    .post(`http://localhost:3001/users/auth/signUp`, {
      email,
      password,
    })
    .then((res) => res.data);
};
