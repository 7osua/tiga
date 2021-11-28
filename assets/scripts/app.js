const userBalance = 300_000;
const userExpense = 0;
const userPayment = 0;
const userBill = 0;
let currentUserBalance = userBalance;
let currentUserExpense = userExpense;
let currentUserPayment = userPayment;
let currentUserBill = userBill;
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

savePaymentBtn.addEventListener('click', assignExpensesForPayment);
saveBillBtn.addEventListener('click', assignExpensesForBill);
paymentLink.addEventListener('click', showPaymentContent);

balanceBtn.addEventListener('click', showBalanceContent);
billLink.addEventListener('click', showBillContent);
savingLink.addEventListener('click', showSavingContent);
backdrop.addEventListener('click', hideDialog);

cancelAssignBtn.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
