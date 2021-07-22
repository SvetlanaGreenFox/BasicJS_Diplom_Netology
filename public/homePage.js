const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout(responce => {
        if (responce.success) {
            location.reload();
        }
    })
}

ApiConnector.current(responce => {
    console.log(responce);
    if (responce.success) {
        ProfileWidget.showProfile(responce.data);
    }
})

const ratesBoard = new RatesBoard();

function checkCurrency() {
    ApiConnector.getStocks(responce => {
        console.log(responce);
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
            moneyManager.setMessage(isSucces);
        }
    })
}

