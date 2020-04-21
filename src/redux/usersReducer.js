const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  users: [],
  totalUsersCount: 21,
  countPages: 15,
  currentPage: 1
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_USERS:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const usersAC = users => ({ type: SET_USERS, users });
export const totalUsersCountAC = totalUsersCount => ({
  type: SET_TOTAL_USERS,
  totalUsersCount
});
export const currentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
