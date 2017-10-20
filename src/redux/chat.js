const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NAME = 'CHANGE_NAME';

export function addMessage(content) {
  return {
    type: ADD_MESSAGE,
    content
  }
}

export function changeUsername(name) {
  return {
    type: CHANGE_NAME,
    name
  }
}

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const messages = [ ...state.messages, {
        name: state.name,
        content: action.content
      }];
      return {
        ...state,
        messages
      };
    case CHANGE_NAME:
      return state;
    default:
      return state;
  }
}
