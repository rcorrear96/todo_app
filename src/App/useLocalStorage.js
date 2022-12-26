import React from 'react';

function useLocalStorage(itemName, initialValue){

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state;


  const onError = (error) => dispatch({type: actionTypes.error, payload:error});
  const onSuccess = (parsedItem) => dispatch({type: actionTypes.success, payload:parsedItem});
  const onSave = (item) => dispatch({type: actionTypes.save, payload:item});
  const onSincronize = () => dispatch({type: actionTypes.sincronize});
    // const [sincronizedItem, setSincronizedItem] = React.useState(true);
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);
    // const [item, setItem] = React.useState(initalState);
    
    React.useEffect(()=>{
      try{
        setTimeout(()=>{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          onSuccess(parsedItem)
          // setItem(parsedItem);
          // setLoading(false);
          // setSincronizedItem(true);
        },4000)
      }
      catch(error){
        onError(error);
        // setError(error);    
      }
    },[sincronizedItem]);
  
    
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        onSave(newItem);
      }catch(error){
        onError(error);
        // setError(error);
      }
    };
  
    const sincronizeItem = () => {
      onSincronize();
    }

    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem
    };
  }

const initialState = ({initialValue}) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
}


const reducerObject = (state, payload) => (
  {
    [actionTypes.error]: {
      ...state,
      error: payload
    },
    [actionTypes.success]: {
      ...state,
      error: false,
      loading: false,
      sincronizedItem: true,
      item: payload
    },
    [actionTypes.save]: {
      ...state,
      item: payload
    },
    [actionTypes.sincronize]: {
      ...state,
      loading: true,
      sincronizedItem: false,
    }
  }
) 

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export {useLocalStorage};