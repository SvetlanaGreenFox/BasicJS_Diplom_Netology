const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout(responce => {
        if (responce.success) {
            location.reload();
        }
    })
}

ApiConnector.current(responce => {
    if (responce.success) {
        ProfileWidget.showProfile(responce.data);
    }
})

const ratesBoard = new RatesBoard();

function checkCurrency() {
    ApiConnector.getStocks(responce => {
        if (responce.success) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(responce.data);
        }
    })
}

checkCurrency();

let timerId = setTimeout(checkCurrency, 60000);

const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, responce => {
        if (responce.success) {
            ProfileWidget.showProfile(responce.data);
            const message = 'Операция выполнена успешно';
            moneyManager.setMessage(responce.success, message);
        } else {
            moneyManager.setMessage(responce.success, responce.error);
        }
    })
}

moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, responce => {
        if (responce.success) {
            ProfileWidget.showProfile(responce.data);
            const message = 'Операция выполнена успешно';
            moneyManager.setMessage(responce.success, message);
        } else {
            moneyManager.setMessage(responce.success, responce.error);
        }
    })
}

moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, responce => {
        if (responce.success) {
            ProfileWidget.showProfile(responce.data);
            const message = 'Операция выполнена успешно';
            moneyManager.setMessage(responce.success, message);
        } else {
            moneyManager.setMessage(responce.success, responce.error);
        }
    })
}

const favoritesWidget = new FavoritesWidget();

ApiConnector.getFavorites((responce) => {
    console.log(responce);
    if (responce.success) {
        checkUserFavorites(responce.data);
    }
})

favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, responce => {
        console.log(responce);
        if (responce.success) {
            checkUserFavorites(responce.data);
            const message = 'Пользователь добавлен';
            favoritesWidget.setMessage(responce.success, message);
        } else {
            favoritesWidget.setMessage(responce.success, responce.error);
        }
    })
}

favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, responce => {
        if (responce.success) {
            checkUserFavorites(responce.data);
            const message = 'Пользователь удалён';
            favoritesWidget.setMessage(responce.success, message);
        } else {
            favoritesWidget.setMessage(responce.success, responce.error);
        }
    })
}

function checkUserFavorites(data) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(data);
    moneyManager.updateUsersList(data);
};
