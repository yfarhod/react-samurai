const state = {
  profilePage: {
    posts: [
      { id: 1, post: 'How are you dude?', likesCount: 15 },
      { id: 2, post: "It's my first post", likesCount: 20 }
    ]
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimych', ava: '11.png' },
      { id: 2, name: 'Farych', ava: '15.png' },
      { id: 3, name: 'Angel', ava: '12.png' },
      { id: 4, name: 'Princess', ava: '13.png' },
      { id: 5, name: 'Knight', ava: '14.png' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your doing dude?' },
      { id: 3, message: 'Yo' }
    ]
  },

  sidebar: {
    friends: ['Dimych', 'Knight', 'Angel', 'Farych']
  }
};

export default state;
