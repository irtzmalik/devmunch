import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  userObject: {
    nickname: null,
    name: null,
    picture: null,
    updated_at: null,
    email: null,
    email_verified: null,
    sub: null,
  }
}



const userReducer = (state = INITIAL_STATE, action) => {
  console.log('@@')
  switch (action.type) {
    case UserActionTypes.USER_OBJECT:
      console.log(state)
      return{
        ...state,
        userObject: action.payload
      }
    default:
      return state
  }
}


export default userReducer;