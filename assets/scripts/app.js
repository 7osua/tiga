const userBalance = 300_000;
const userExpense = 0;
const userPayment = 0;
const userBill = 0;
const userReserve = 200_000;

let currentBalance = userBalance;
let currentExpense = userExpense;
let currentPayment = userPayment;
let currentBill = userBill;
let currentReserve = 0;
let currentReserveBalance = userReserve;
let currentTotalExpenses = userBalance;

let hasReserve = false;
let reserveCount = 0;
let maxToReserve = 4;

adjustExpenseBars(
    userBalance,
    currentTotalExpenses,
    currentExpense,
    hasReserve,
);
adjustBalanceBars(userBalance);

function resetUserValue() {
    if (currentBalance === 0 && currentReserveBalance === 0) {
        setTimeout(() => {
            resetValue(userBalance, 0);
            currentBill = userBill;
            currentPayment = 0;
            currentExpense = 0;
            currentBalance = userBalance;
            currentReserve = 0;
            currentReserveBalance = userReserve;
            currentTotalExpenses = userBalance;
            hasReserve = false;
            reserveCount = 0;
            maxToReserve = 4;
        }, 1500);
    }
}

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
    resetUserValue();
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
    hasReserve = true;
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
    if (maxToReserve === reserveCount) {
        alert('Kamu sudah melewati batas batas isi ulang');
        return;
    }
    currentTotalExpenses = userBalance + userReserve;
    if (hasReserve) {
        ++reserveCount;
        adjustExpenseBars(
            userBalance,
            currentTotalExpenses,
            currentExpense,
            hasReserve,
        );
    }
    reserveCount = changeReserveCounter(reserveCount);
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
