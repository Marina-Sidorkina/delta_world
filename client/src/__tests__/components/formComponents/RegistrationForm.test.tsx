import '../../../../mocks/matchMediaMock';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from "../../../../mocks/mockStore";
import {HashRouter} from "react-router-dom";
import RegistrationForm from "../../../components/formComponents/registrationForm/RegistrationForm";

jest.mock('../../../redux/actions/registrationForm');
configure({ adapter: new Adapter() });

describe('RegistrationForm component test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({
      languageSelector: {
        value: 'ru'
      },
      registration: {
        values: {
          name: '',
          gender: '',
          dateOfBirth: '',
          email: '',
          phone: '',
        },
        isLoading: false,
        error: false
      }
    });
    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <RegistrationForm />
        </HashRouter>
      </Provider>
    );
  })

  test('should render RegistrationForm', () => {
    expect(wrapper.length).toEqual(1)
  });

  test('should render RegistrationForm', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
