const model = require('../../src/models/commentModel');

const DATUM = {
  id: '60d2236f67d0d8992e6118d1',
  message: 'Beautiful pic',
  owner:{
    id: '60d0fe4f5311236168a109f6',
    title: 'miss',
    firstName: 'Madison',
    lastName: 'Ambrose',
    picture: 'https://randomuser.me/api/portraits/med/women/15.jpg'
  },
  post: '60d21b8667d0d8992e610d3f',
  publishDate: '2020-03-06T23:00:40.972Z'
};

const RESULT = {
  owner: {
    id: '60d0fe4f5311236168a109f6',
    firstName: 'Madison',
    lastName: 'Ambrose',
    picture: 'https://randomuser.me/api/portraits/med/women/15.jpg'
  },
  publishDate: {
    enDate: '7 of March 2020',
    ruDate: '7 Марта 2020 года',
    enDateAndTime: '7 of March 02:00',
    ruDateAndTime: '7 Марта 02:00'
  },
  message: 'Beautiful pic',
  id: '60d2236f67d0d8992e6118d1'
};

describe('Comment Model', () => {
  it('parseDatum should return only necessary processed fields', () => {
    expect(model.parseDatum(DATUM)).toEqual(RESULT);
  });

  it('parseData should return array of objects with only necessary processed fields', () => {
    expect(model.parseData({ data: [DATUM, DATUM], page: 0, limit: 5, total: 100 }))
      .toEqual({ data: [RESULT, RESULT], page: 0, limit: 5, total: 100 });
  })
})
