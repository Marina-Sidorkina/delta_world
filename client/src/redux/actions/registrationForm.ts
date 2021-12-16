import { Dispatch } from 'redux';
import {
  UPDATE_REGISTRATION_NAME, UPDATE_REGISTRATION_EMAIL, UPDATE_REGISTRATION_GENDER,
  UPDATE_REGISTRATION_DATE_OF_BIRTH, UPDATE_REGISTRATION_PHONE, RESET_REGISTRATION_VALUES,
  SHOW_REGISTRATION_ERROR, HIDE_REGISTRATION_ERROR, SHOW_REGISTRATION_LOADING,
  HIDE_REGISTRATION_LOADING
} from '../constants/registrationForm';
import { addAndShowNewUser } from '../../api/proxy';
import { createNewUser } from '../../utils/api';
import { updateAuthorizedUserDataAction } from './login';
import { getExpirationDate } from '../../utils/redux';
import { DEFAULT_IMAGE } from '../../constants/components';

export const showRegistrationErrorAction = () => ({
  type: SHOW_REGISTRATION_ERROR
});

export const hideRegistrationErrorAction = () => ({
  type: HIDE_REGISTRATION_ERROR
});

export const updateNameAction = (value: string) => ({
  type: UPDATE_REGISTRATION_NAME,
  payload: value
});

export const updateEmailAction = (value: string) => ({
  type: UPDATE_REGISTRATION_EMAIL,
  payload: value
});

export const updateGenderAction = (value: string) => ({
  type: UPDATE_REGISTRATION_GENDER,
  payload: value
});

export const updateDateOfBirthAction = (value: string) => ({
  type: UPDATE_REGISTRATION_DATE_OF_BIRTH,
  payload: value
});

export const updatePhoneAction = (value: string) => ({
  type: UPDATE_REGISTRATION_PHONE,
  payload: value
});

export const resetValuesAction = () => ({
  type: RESET_REGISTRATION_VALUES
});

export const showLoadingAction = () => ({
  type: SHOW_REGISTRATION_LOADING,
});

export const hideLoadingAction = () => ({
  type: HIDE_REGISTRATION_LOADING,
});

export const registerUser = (data: any, history: any) => (dispatch: Dispatch) => {
  dispatch(hideRegistrationErrorAction());
  dispatch(showLoadingAction());
  addAndShowNewUser(createNewUser(data))
    .then((response) => {
      if (response.data.data.id) {
        dispatch(resetValuesAction());
        dispatch(hideRegistrationErrorAction());
        dispatch(hideLoadingAction());
        dispatch(updateAuthorizedUserDataAction(response.data.data));
        document.cookie = `id=${response.data.data.id}; path=/; expires=${getExpirationDate()}`;
        document.cookie = `picture=${response.data.data.picture
        || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
        document.cookie = `name=${response.data.data.firstName}; path=/; expires=${getExpirationDate()}`;
        if (response.data.data.id) dispatch(history.push(`profile/${response.data.data.id}`));
      } else {
        dispatch(showRegistrationErrorAction());
        dispatch(hideLoadingAction());
      }
    })
    .catch(() => {
      dispatch(showRegistrationErrorAction());
      dispatch(hideLoadingAction());
    });
};
