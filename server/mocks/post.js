module.exports = {
  postListMockData: { data: [], page: 0, limit: 5, total: 100 },
  postMockData: {
    id: '60d21b8667d0d8992e610d3f',
    image: 'https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg',
    likes: 16,
    link: null,
    tags: ['dog', 'pet', 'canine'],
    text: '@adventure.yuki frozen grass short-coated black dog sitting on snow',
    owner: {
      id: '60d0fe4f5311236168a109ed',
      title: 'miss',
      firstName: 'Kayla',
      lastName: 'Bredesen',
      picture: 'https://randomuser.me/api/portraits/med/women/13.jpg'
    },
    publishDate: '2020-05-24T05:44:55.297Z'
  },
  postProcessedMockData: {
    id: '60d21b8667d0d8992e610d3f',
    image: 'https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg',
    owner: {
      id: '60d0fe4f5311236168a109ed',
      firstName: 'Kayla',
      lastName: 'Bredesen',
      picture: 'https://randomuser.me/api/portraits/med/women/13.jpg',
      title: 'miss'
    },
    publishDate: {
      enDate: '24 of May 2020',
      ruDate: '24 Мая 2020 года',
      enDateAndTime: '24 of May 08:44',
      ruDateAndTime: '24 Мая 08:44'
    },
    text: '@adventure.yuki frozen grass short-coated black dog sitting on snow'
  }
}