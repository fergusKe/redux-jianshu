import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data);
  }
  return state;
};
