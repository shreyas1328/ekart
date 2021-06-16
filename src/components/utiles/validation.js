

export const loginValidation = (values) => {

    const  errors = {};

    if(!values.username){
        errors.username = "This field cannot be empty"
    }

    if(!values.password){
        errors.password = "This field cannot be empty"
    }

    return errors;
}

export const profileValidation = (values) => {

    const  errors = {};

    if(!values.name){
        errors.username = "This field cannot be empty"
    }

    if ( !values.email) {
        errors.email = "This field cannot be empty";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address format is invalid";
      }

    if(!values.address1){
        errors.address1 = "This field cannot be empty"
    }

    if(!values.address2){
        errors.address2 = "This field cannot be empty"
    }

    return errors;
}