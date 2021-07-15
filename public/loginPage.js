"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = data => {
    let result = ApiConnector.login(data, callback => console.log(callback));
    if (result.success) {
        location.reload();
    } else {
        setLoginErrorMessage(result.error);
    }
}

userForm.registerFormCallback = data => {
    let result = ApiConnector.register(data, callback => console.log(callback));
    if (result.success) {
        location.reload();
    } else {
        setLoginErrorMessage(result.error);
    }
}

