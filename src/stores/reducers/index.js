export const SET_STATE = 'SET_STATE'
export const RECORD_STATE = 'RECORD_STATE'
export const SAVE_PRODUCT_LIST = 'SAVE_PRODUCT_LIST'
export const NEW_PRODUCT_DATA = 'NEW_PRODUCT_DATA'
export const DELETE_ITEM = 'DELETE_ITEM'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const TEST_DISPATCH = 'TEST_DISPATCH'
export const testData = (state = {}, action = {}) => {
  switch (action.type) {
    case TEST_DISPATCH:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
