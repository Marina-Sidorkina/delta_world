import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from "../../../../mocks/mockStore";
import AuthorizedUserBlock from "../../../components/headerComponents/authorizedUserBlock/AuthorizedUserBlock";
import { HashRouter } from "react-router-dom";
import * as actions from "../../../redux/actions/login";

configure({ adapter: new Adapter() });
jest.mock('../../../redux/actions/login');

describe('AuthorizedUserBlock component test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({
      login: {
        data: {
          authorizedUserId: '123345',
          authorizedUserName: 'Name',
          authorizedUserPicture: ''
        }
      }
    });
    store.dispatch = jest.fn();
    wrapper = mount(<Provider store={store}><HashRouter><AuthorizedUserBlock /></HashRouter></Provider>);
  })

  test('should render AuthorizedUserBlock', () => {
    expect(wrapper.length).toEqual(1)
  });

  test('prop should match with store', () => {
    expect(wrapper.prop('login')).toEqual(store.login);
  });

  test('should render AuthorizedUserBlock', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should invoke resetAuthorizedUserAction', () => {
    wrapper.childAt(0).find('div span').last().simulate('click');
    expect(actions.resetAuthorizedUserAction).toBeCalledTimes(1)
  });
});
