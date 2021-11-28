const userBalance = 300_000;
const userExpense = 0;
const userPayment = 0;
const userBill = 0;
const userReserve = 0;

let currentBalance = userBalance;
let currentExpense = userExpense;
let currentPayment = userPayment;
let currentBill = userBill;
let currentReserve = userReserve;
let currentReserveBalance = 0;

adjustExpenseBalanceBars(userBalance);

function assignExpense(typeOfExpense, valOfExpense) {
    if (currentBalance < 0 || currentBalance < valOfExpense) {
        alert('Anggaran untuk pengeluaranmu tidak cukup !');
        return;
    }

    if (typeOfExpense === 'payment') {
        valOfExpense = currentPayment;
    } else {
        valOfExpense = currentBill;
    }

    currentBalance = subtractBalance(valOfExpense);
    currentExpense = addExpenses(valOfExpense);
    hideDialog();
}

function assignExpensesForPayment() {
    assignExpense('payment', (currentPayment = 200_000));
}

function assignExpensesForBill() {
    assignExpense('bill', (currentBill = 100_000));
}

function assignReserve() {
    currentReserveBalance = 100_000;
    adjustReserve(currentReserveBalance);
    hideDialog();
}

function assignReserveToBalance() {
    currentReserve = 50_000;
    if (currentReserveBalance <= 0) {
        alert('Dana cadangan tidak cukup :' + currentReserveBalance);
        return;
    }
    if (userBalance < currentBalance + currentReserve) {
        alert('Batas pengeluaran sebesar ' + userBalance);
        return;
    }
    currentBalance = increaseBalance(currentReserve);
    currentReserveBalance = descreaseReserve(
        currentReserveBalance,
        currentReserve,
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
