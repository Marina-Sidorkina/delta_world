import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import {
  UPDATE_AUTHORIZED_USER_DATA,
  LOAD_AUTHORIZATION_ERROR,
  SHOW_AUTHORIZATION_LOADING,
  HIDE_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE,
  RESET_AUTHORIZED_USER, RESET_AUTHORIZATION_ERROR
} from '../constants/login';
import { getUserInfo } from '../../api/proxy';
import { setCookie } from '../../utils/cookies';
import { IProxyUserFull } from '../../api/proxy/@types/proxy';

export const updateAuthorizedUserDataAction = (response: AxiosResponse<any, any> | IProxyUserFull) => ({
  type: UPDATE_AUTHORIZED_USER_DATA,
  payload: response,
});

export const updateAuthorizationInputValue = (value: string) => ({
  type: UPDATE_AUTHORIZATION_INPUT_VALUE,
  payload: value
});

const loadErrorAction = () => ({
  type: LOAD_AUTHORIZATION_ERROR,
});

const showLoadingAction = () => ({
  type: SHOW_AUTHORIZATION_LOADING,
});

export const hideLoadingAction = () => ({
  type: HIDE_AUTHORIZATION_LOADING,
});

export const resetAuthorizedUserAction = () => ({
  type: RESET_AUTHORIZED_USER
});

export const resetAuthorizationErrorAction = () => ({
  type: RESET_AUTHORIZATION_ERROR
});

export const authorizeUser = (id: string, history: any) => (dispatch: Dispatch) => {
  dispatch(resetAuthorizationErrorAction());
  dispatch(showLoadingAction());
  getUserInfo(id)
    .then((response) => {
      dispatch(updateAuthorizedUserDataAction(response.data.data));
      dispatch(hideLoadingAction());
      if (response.data.data.id) {
        setCookie(response);
        history.push(`profile/${response.data.data.id}`);
      }
    })
    .catch(() => {
      dispatch(loadErrorAction());
    });
};
