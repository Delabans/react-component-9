import React, { useState } from 'react'

const useLocalStorage = (name, initialValue) => {
    const [value ,setValue] = useState(initialValue);

    if (typeof window === undefined) {
        return initialValue;
    }
    try {
const data = window.localStorage.getItem(key);
return data ? JSON.parse(data) : initialValue;
    } catch (error) {
        console.log(error)
        return initialValue
    }

    const setLocalStorage = (value) => {
        try{

        } catch (error){

        }
    }


  return [value , setValue];
  if (typeof window !== undefined){
      window.localStorage.getItem()
  }

};

export default useLocalStorage