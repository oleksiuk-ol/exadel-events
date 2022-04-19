import { signIn, signUp } from "../../services/auth";
import { AUTH } from "./constants";

export const authSuccess = (payload) => ({
  type: AUTH.SUCCESS,
  payload,
});

export const logout = () => ({
  type: AUTH.LOGOUT,
});

export const userLogin = (email, password) => async (dispatch) => {
  const userEmail = await signIn({ email, password });
  if (userEmail) {
    dispatch(authSuccess({ email: userEmail }));
  }
};

export const userRegistration =
  (email, password) => async (dispatch, getStore) => {
    console.log("USER REGISTRATION");

    const userEmail = await signUp({ email, password });
    console.log("USER REG EMAIL", userEmail);
    if (userEmail) {
      console.log("USER EMAIL", userEmail);
      dispatch(authSuccess({ email: userEmail }));
    }
  };
