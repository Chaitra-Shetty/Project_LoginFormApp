import React,{ useEffect } from 'react'
import useForm from '../hooks/useForm';
import validate  from '../utils/validate';


const Formsignup = () => {
    const {handleChange, handleSubmit, values, error} = useForm(validate)

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Login Forms</h1>
            <div style={{ border: '1px solid black', width: '20%', textAlign: 'left', margin: '2em', padding: '3em' }}>
                <div><label>Username</label><input value={values.username} type="text" name="username" onChange={handleChange}/>{error.username && <p>{error.username}</p>}</div>
                <div><label>Email</label><input value={values.email} type="email" name="email" onChange={handleChange}/>{error.email && <p>{error.email}</p>}</div>
                <div><label>Password</label><input value={values.password} type="password" name="password" onChange={handleChange}/>{error.password && <p>{error.password}</p>}</div>
                <div><label>Confirm Password</label><input value={values.cpassword} type="password" name="cpassword" onChange={handleChange}/>{error.cpassword && <p>{error.cpassword}</p>}</div>
                <div><button>SignIn</button><span>Already have an account click <a href="#">here</a></span></div>
                <div><input type="checkbox" name="keepme"/>Keep me Signed in</div>
            </div>
            </form>
        </div>
    )
}

export default Formsignup;