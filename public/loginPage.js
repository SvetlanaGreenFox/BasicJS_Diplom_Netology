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



