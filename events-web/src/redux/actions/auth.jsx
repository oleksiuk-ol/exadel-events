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
  const userJwt = await signIn({ email, password });
  if (userJwt) {
    dispatch(authSuccess({ jwt: userJwt }));
  }
};

export const userRegistration = (email, password) => async (dispatch) => {
  const userJwt = await signUp({ email, password });
  if (userJwt) {
    dispatch(authSuccess({ jwt: userJwt }));
  }
};
