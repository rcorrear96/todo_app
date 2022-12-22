import React from 'react';

function useLocalStorage(itemName, initalState){
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initalState);
    
    React.useEffect(()=>{
      try{
        setTimeout(()=>{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initalState));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        },4000)
      }
      catch(error){
        setError(error);    
      }
    },[sincronizedItem]);
  
    
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }

    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem
    };
  }

export {useLocalStorage};