import axios from 'axios';
import React, {useState, useEffect} from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [error, setError] = useState({});
    var [flag, setFlag] = useState(false);


useEffect(()=>{
    const temp = localStorage.getItem('values');
    const strValues = JSON.parse(temp);
    setFlag(flag = window.confirm('Sign as ' + strValues.username));
    if (!strValues)
    {
        return {values};
    }
    if(flag === false)
    {
        
        return {values};
    }
    else
    {
           return setValues(strValues);
    }
},[])

const makeRequest = () =>{
   axios.post('https://jsonplaceholder.typicode.com/todos/1', values).then((res) => {
    console.log('posted')
  }).catch((err) => {   
    console.log('Try again')
  })
}
    


const handleChange = (e) => {
    const {name,value} = e.target;

    setValues((prev)=>{
        return{...prev,[name]: value};
    })
};
const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    localStorage.setItem('values', JSON.stringify(values));
    makeRequest();
}



return {handleSubmit, handleChange, values, error}
};


export default useForm;
