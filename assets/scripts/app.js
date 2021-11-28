const userBalance = 300_000;
const userExpense = 0;
const userPayment = 0;
const userBill = 0;
const userReserve = 0;

let currentUserBalance = userBalance;
let currentUserExpense = userExpense;
let currentUserPayment = userPayment;
let currentUserBill = userBill;
let currentUserReserve = userReserve;
let currentReserveBalance = 0;

adjustExpenseBalanceBars(userBalance);

function assignExpense(typeOfExpense, valOfExpense) {
    if (currentUserBalance < 0 || currentUserBalance < valOfExpense) {
        alert('Anggaran untuk pengeluaranmu tidak cukup !');
        return;
    }

    if (typeOfExpense === 'payment') {
        valOfExpense = currentUserPayment;
    } else {
        valOfExpense = currentUserBill;
    }

    currentUserBalance = subtractBalance(valOfExpense);
    currentUserExpense = addExpenses(valOfExpense);
    hideDialog();
}

function assignExpensesForPayment() {
    assignExpense('payment', (currentUserPayment = 200_000));
}

function assignExpensesForBill() {
    assignExpense('bill', (currentUserBill = 100_000));
}

function assignReserve() {
    currentUserReserve = 100_000;
    adjustReserve(currentUserReserve);
    hideDialog();
}

function assignReserveToBalance() {
    currentReserveBalance = currentUserReserve;
    currentUserBalance = increaseBalance(currentUserReserve);
    currentUserReserve = descreaseReserve(
        currentUserReserve,
        currentReserveBalance,
    );
    hideDialog();
}

savePaymentBtn.addEventListener('click', assignExpensesForPayment);
saveBillBtn.addEventListener('click', assignExpensesForBill);
saveReserveBtn.addEventListener('click', assignReserve);
saveBalanceBtn.addEventListener('click', assignReserveToBalance);

balanceBtn.addEventListener('click', showBalanceContent);
paymentLink.addEventListener('click', showPaymentContent);
billLink.addEventListener('click', showBillContent);
reserveLink.addEventListener('click', showReserveContent);
backdrop.addEventListener('click', hideDialog);

cancelAssignBtn.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
