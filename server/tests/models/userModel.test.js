const model = require('../../src/models/userModel');

const DATUM = {
  id: '60d0fe4f5311236168a109ce',
  title: 'mr',
  firstName: 'Rudi',
  lastName: 'Droste',
  picture: 'https://randomuser.me/api/portraits/med/men/83.jpg',
  gender: 'male',
  email: 'rudi.droste@example.com',
  dateOfBirth: '2021-06-21T21:02:08.029Z',
  phone: '0421-7342787',
  location: {
    street: '1196, MÃ¼hlenweg',
    city: 'GrÃ¼nhain-Beierfeld',
    state: 'Sachsen-Anhalt',
    country: 'Germany',
    timezone: '+3:30'
  },
  registerDate: '2021-06-21T21:02:08.029Z',
  updatedDate: '2021-06-21T21:02:08.029Z'
};

const RESULT = {
  id: '60d0fe4f5311236168a109ce',
  firstName: 'Rudi',
  lastName: 'Droste',
  title: 'mr',
  gender: 'male',
  email: 'rudi.droste@example.com',
  phone: '0421-7342787',
  dateOfBirth: {
    enDate: '22 of June 2021',
    ruDate: '22 Июня 2021 года',
    enDateAndTime: '22 of June 00:02',
    ruDateAndTime: '22 Июня 00:02'
  },
  registerDate: {
    enDate: '22 of June 2021',
    ruDate: '22 Июня 2021 года',
    enDateAndTime: '22 of June 00:02',
    ruDateAndTime: '22 Июня 00:02'
  },
  picture: 'https://randomuser.me/api/portraits/med/men/83.jpg'
};

describe('User Model', () => {
  it('parseDatum should return only necessary processed fields', () => {
    expect(model.parseDatum(DATUM)).toEqual(RESULT);
  })
})