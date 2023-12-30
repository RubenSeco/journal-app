// import { useDispatch, useSelector } from "react-redux";
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";



export const checkAuthentication = (email, password) => {

  return async (dispatch) => {

    dispatch(checkingCredentials());

  };
};

export const startGoogleSignIn = () => {

  return async (dispatch) => {

    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };

};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await registerUserWithEmailPassword({ email, password, displayName });

    console.log(resp);

  };

};