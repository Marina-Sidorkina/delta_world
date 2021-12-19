const initialStore = {
  userModal: {
    isOpened: false,
    values: {
      picture: '',
      name: 'John Doe',
      gender: 'male',
      dateOfBirth: {
        ruDateAndTime: '05 October 2011 14:48 UTC',
      },
      registerDate: {
        ruDateAndTime: '05 October 2011 14:48 UTC',
      },
      id: '12345',
      email: 'test',
      phone: '55555'
    }
  },
  login: {
    data: {
      authorizedUserId: '12345',
      error: false,
      isLoading: false,
      inputValue: ''
    }
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
  },
  languageSelector: {
    value: 'ru'
  },
  postModal: {
    isOpened: false
  },
  userPosts: {
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
  },
  userInfo: {
    data: {
      isLoading: false,
      user: {
        firstName: 'John',
        lastName: 'Doe',
        picture: '',
        title: 'mr',
        gender: 'male',
        dateOfBirth: {
          ruDateAndTime: '05 October 2011 14:48 UTC',
        },
        registerDate: {
          ruDateAndTime: '05 October 2011 14:48 UTC',
        },
        id: '12345',
        email: '',
        phone: '55555'
      }
    }
  }
};

export default initialStore;
