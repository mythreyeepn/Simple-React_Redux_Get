import {ActionTypes} from './actionTypes';

export const setProducts = (users)=>{
  return {
    type:ActionTypes.SET_PRODUCTS,
    payload:users
  }
  
}