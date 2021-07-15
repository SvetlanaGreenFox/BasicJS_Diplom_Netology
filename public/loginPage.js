"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = data => {
    let result = ApiConnector.login(data, callback => console.log(callback));
    if (result.success) {
        location.reload();
    } else (
        let message = result.error;
    setLoginErrorMessage(message);
    )
}

userForm.registerFormCallback = data => {
    let result = ApiConnector.register(data, callback => console.log(callback));
    if (result.success) {
        location.reload();
    } else (
        let message = result.error;
    setRegisterErrorMessage(message);
    )
}

