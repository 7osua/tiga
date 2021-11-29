const userBalance = 300_000;
const userExpense = 0;
const userPayment = 0;
const userBill = 0;
const userReserve = 200_000;

let currentBalance = userBalance;
let currentExpense = userExpense;
let currentPayment = userPayment;
let currentBill = userBill;
let currentReserve = userReserve;
let currentReserveBalance = userReserve;
let currentTotalExpenses = userBalance;

let userHasReserve = false;
let userReserveCounter = 0;
let maxToReserve = 2;

adjustExpenseBars(
    userBalance,
    currentTotalExpenses,
    currentExpense,
    userHasReserve,
);
adjustBalanceBars(userBalance);

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
    adjustReserve(currentReserveBalance);
    hideDialog();
}

function assignReserveToBalance() {
    userHasReserve = true;
    currentReserve = 50_000;
    if (currentReserveBalance <= 0) {
        alert('Dana cadangan tidak cukup :' + currentReserveBalance);
        currentReserveBalance = 0;
        return;
    }
    if (userBalance < currentBalance + currentReserve) {
        alert('Batas pengeluaran sebesar ' + userBalance);
        return;
    }
    if (maxToReserve === userReserveCounter) {
        alert('Kamu sudah melewati batas pengeluaran mu');
        return;
    }
    currentTotalExpenses = userBalance + userReserve;
    if (userHasReserve) {
        ++userReserveCounter;
        adjustExpenseBars(
            userBalance,
            currentTotalExpenses,
            currentExpense,
            userHasReserve,
        );
    }
    userReserveCounter = changeReserveCounter(userReserveCounter);
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
