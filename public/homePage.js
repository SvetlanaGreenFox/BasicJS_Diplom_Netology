const logoutButton = new LogoutButton();

logoutButton.action = callback => {
    let result = ApiConnector.logout(callback);
    if (result.success) {
        location.reload();
    } else {
        setLoginErrorMessage(result.error);
    }
}

