const initialState = {
  friends: [
    { id: 1, name: 'Dimych', ava: '11.png' },
    { id: 2, name: 'Knight', ava: '14.png' },
    { id: 3, name: 'Angel', ava: '12.png' },
    { id: 4, name: 'Farych', ava: '15.png' }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
