import '../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import mockStore from '../../../mocks/mockStore';
import Posts from "../../pages/posts/Posts";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe('Posts test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({
      languageSelector: {
        value: 'ru'
      },
      postModal: {
        isOpened: false
      },
      postsList: {
        data: {
          page: 0,
          total: 100,
          perPage: 6,
          posts: [{
            id: '12345',
            image: '',
            text: 'text',
            publishDate: {
              ruDateAndTime: '05 October 2011 14:48 UTC'
            },
            owner: {
              firstName: 'John',
              lastName: 'Doe',
              picture: '',
              title: 'mr',
              id: '12345'
            }
          }]
        }
      }
    });
    wrapper = mount(
      <Provider store={ store } >
        <HashRouter>
          <Posts />
        </HashRouter>
      </Provider>);
  });

  test('should render Posts', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render Posts', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
