function validate(values){
    let errors = {};
    
    if(!values.username.trim()){
        errors.username = "Username Required"
    }
    
    if(!values.email.trim()){
        errors.email = "Email Required"
    }
    else if(!/^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/.test(values.email)){
    errors.email = "Email address is in valid"
    }
    
    if (!values.password.trim()){
        errors.password = "Password Required"
    }
    else if (values.password.length < 6 ){
        errors.password = "password should be more than 6 characters"
    }
    
    if (!values.cpassword.trim()){
        errors.cpassword = "Password Required"
    }
    else if (values.cpassword !== values.password ){
        errors.cpassword = "password do not match"
    }
    return errors;
    }
    
    export default validate;