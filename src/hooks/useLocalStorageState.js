import {useState, useEffect} from 'react';

function useLocalStorageState(key, defaultVal){
    const [state, setState] = useState(() => {
        let val;
        try{
            console.log(window.localStorage.getItem(key))
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        }
        catch(e){
            // console.log(e)
            val = defaultVal;
        }

        return val;
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, 
    [state]);
    
    return [state, setState]
} 

export default useLocalStorageState;