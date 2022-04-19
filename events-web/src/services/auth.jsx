import axios from "axios";

export const signIn = async ({ email, password }) => {
  axios
    .post(`http://localhost:3001/users/auth/logIn`, {
      email,
      password,
    })
    .then((res) => {
      console.log(res);
      //   localStorage.setItem("jwt", res.data);
    });
};

export const signUp = async ({ email, password }) => {
  axios
    .post(`http://localhost:3001/users/auth/signUp`, {
      email,
      password,
    })
    .then((res) => {
      console.log(res);
      //   localStorage.setItem("jwt", res.data);
    });
};
