export default function login_validate(values){
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if(!values.password){
        errors.password = "Required";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    return errors;

}

export function registerValidate(values){
    
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validate confirm password
    if(!values.cpassword){
        errors.cpassword = "Required";
    } else if(values.password !== values.cpassword){
        errors.cpassword = "Password Not Match...!"
    } else if(values.cpassword.includes(" ")){
        errors.cpassword = "Invalid Confirm Password"
    }
    
    // validation for password
    if(!values.password){
        errors.password = "Required";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    // validation for designation
    if(!values.designation){
        errors.designation = "Required";
    } else if(values.designation.includes(" ")){
        errors.designation = "Invalid Designation";
    }

    return errors;
}