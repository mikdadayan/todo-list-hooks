import {useState} from 'react';

function useToggle(initialVal = false){
    const [ value, setState ] = useState(initialVal);
    const toggle = () => {
        setState(!value)
    }
    return [value, toggle]
}

export default useToggle;