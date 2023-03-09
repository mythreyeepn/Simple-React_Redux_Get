import {ActionTypes} from './actionTypes';
const initialState ={
  users:[]
}

export const userreducer = (state= initialState,{type,payload}) => { 
  switch(type){
    case ActionTypes.SET_PRODUCTS : 
    return {...state,users:payload}

    default :
    return state
  }

};
