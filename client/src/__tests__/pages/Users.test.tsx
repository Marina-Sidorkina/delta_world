import '../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import mockStore from '../../../mocks/mockStore';
import Users from "../../pages/users/Users";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe('Users test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({
      languageSelector: {
        value: 'ru'
      },
      usersList: {
        data: {
          page: 0,
          total: 100,
          perPage: 6,
          users: [{
            firstName: 'John',
            lastName: 'Doe',
            title: 'mr',
            id: '12345'
          }]
        }
      }
    });
    wrapper = mount(
      <Provider store={ store } >
        <HashRouter>
          <Users />
        </HashRouter>
      </Provider>);
  });

  test('should render Users', () => {
   expect(wrapper.length).toEqual(1);
  });

  test('should render Users', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
