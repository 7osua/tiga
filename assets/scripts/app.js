let hasInitialized = false;
let maxExpense;
let isDefault = false;
const defaultUsed = 20_000;
const defaultReserveBalance = 100_000;

let title = '';
let userBalance = 0;
let userPayment = 0;
let userBill = 0;
const userExpense = 0;
let userReserve = 0;
const typeForPay = 'payment';
const typeForBill = 'bill';

let currentBalance = 0;
let currentPayment = 0;
let currentBill = 0;

let currentReserve = 0;
let currentReserveBalance = 0;
let hasReserve = false;
let reserveCount = 0;
let maxReserve = 0;

let currentExpense = 0;
let currentTotalExpenses = userBalance;
const transactionLogs = [];

function defaultAction(message) {
    if (isDefault) {
        showSnackbar('warning', message);
        isDefault = false;
    }
}

function notSpecified(val, defaultVal) {
    if (isNaN(val) || val <= 0) {
        isDefault = true;
        return defaultVal;
    }
    return val;
}

function checkBalance(bal, currBal, currRes, currResBal) {
    if (currResBal <= 0) {
        showSnackbar('danger', `Dana cadangan habis / tidak cukup`);
    }
    if (bal < currBal + currRes) {
        showSnackbar('danger', `Maksimal pengeluaran Rp. ` + bal);
    }
}

function initializedBalance() {
    hasInitialized = true;
    maxExpense = parseInt(maxExpense);
    maxExpense = notSpecified(maxExpense, defaultReserveBalance);
    userBalance = maxExpense;
    currentBalance = maxExpense;
    defaultAction('Menggunakan nilai default');
    setTimeout(() => {
        showSnackbar('success', 'Dana pengeluaran berhasil diinisialisasi!');
    }, 3000);
}

function initializedReserveBalance() {
    maxReserve = parseInt(maxReserve);
    maxReserve = notSpecified(maxReserve, defaultReserveBalance);
    userReserve = maxReserve;
    defaultAction('Menggunakan nilai default');
    setTimeout(() => {
        showSnackbar('default', 'Saldo dana cadangan berhasil ditambahkan!');
    }, 3000);
}

function initializedReserve() {
    currentReserve = parseInt(currentReserve);
    currentReserve = notSpecified(currentReserve, defaultUsed);
}

function initializedExpense(typeExpense) {
    if (!currentTitle || currentTitle === '' || currentTitle === undefined) {
        currentTitle = 'Dana Keluar untuk:';
    }
    if (typeExpense === typeForPay) {
        currentTitle += ' Pembayaran';
        currentPayment = parseInt(currentPayment);
        currentPayment = notSpecified(currentPayment, defaultUsed);
    } else {
        currentTitle += ' For Billing';
        currentBill = parseInt(currentBill);
        currentBill = notSpecified(currentBill, defaultUsed);
    }
    defaultAction('Menggunakan nilai default');
    setTimeout(() => {
        showSnackbar('success', 'Pengeluaran-mu berhasil disimpan!');
    }, 3000);
}

function resetUserValue() {
    if (
        currentBalance === 0 &&
        hasReserve === true &&
        currentReserveBalance === 0 &&
        hasInitialized
    ) {
        setTimeout(() => {
            resetValue(userBalance, 0);
            currentBill = 0;
            currentPayment = 0;
            currentExpense = 0;
            currentBalance = 0;
            currentReserve = 0;
            currentReserveBalance = 0;
            currentTotalExpenses = 0;
            hasReserve = false;
            reserveCount = 0;
            maxReserve = 4;
            hasInitialized = false;
            reserveEvent(reserveLink, saveReserveBtn);
            initContent();
        }, 1500);
    }
}

function writeToLog(typeTran, title, amount, total, balance, expense) {
    const transactionDetail = {
        type: '',
        title: '',
        amount: 0,
        total: 0,
        expenses: 0,
        balance: 0,
    };
    if (typeTran === typeForPay) {
        transactionDetail.type = typeForPay;
    } else if (typeTran === typeForBill) {
        transactionDetail.type = typeForBill;
    }
    transactionDetail.title = title;
    transactionDetail.amount = amount;
    transactionDetail.total = total;
    transactionDetail.balance = balance;
    transactionDetail.expenses = expense;
    transactionLogs.push(transactionDetail);
    console.table(transactionLogs);
}

function assignExpense(typeExpense, expenseTitle, currExpense, totalExpense) {
    if (currentBalance < 0 || currentBalance < currExpense) {
        return;
    }
    currentExpense = addExpenses(currExpense);
    currentBalance = subtractBalance(currExpense);
    writeToLog(
        typeExpense,
        expenseTitle,
        currExpense,
        totalExpense,
        currentBalance,
        currentExpense,
    );
    resetUserValue();
    hideDialog();
}

function assignExpensesForPayment() {
    [currentTitle, currentPayment] = getExpenseValue(
        paymentTitle,
        paymentAmount,
    );
    initializedExpense(typeForPay);
    userPayment += currentPayment;
    assignExpense(typeForPay, currentTitle, currentPayment, userPayment);
}

function assignExpensesForBill() {
    [currentTitle, currentBill] = getExpenseValue(billTitle, billAmount);
    initializedExpense(typeForBill);
    userBill += currentBill;
    assignExpense(typeForBill, currentTitle, currentBill, userBill);
}

function assignReserve() {
    maxReserve = getReserveBalanceValue(reserveAmount);
    initializedReserveBalance();
    currentReserveBalance = userReserve;
    adjustReserve(currentReserveBalance);
    hideDialog();
    preventReserve();
}

function assignReserveToBalance() {
    if (hasInitialized) {
        hasReserve = true;
        currentReserve = getReserveValue(balanceAmount);
        initializedReserve();
        if (currentReserveBalance <= 0) {
            currentReserveBalance = 0;
            checkBalance(
                userBalance,
                currentBalance,
                currentReserve,
                currentReserveBalance,
            );
            return;
        }
        if (userBalance < currentBalance + currentReserve) {
            checkBalance(
                userBalance,
                currentBalance,
                currentReserve,
                currentReserveBalance,
            );
            return;
        }
        currentTotalExpenses = userBalance + userReserve;
        if (hasReserve) {
            ++reserveCount;
            defaultAction('Menggunakan nilai default');
            setTimeout(() => {
                showSnackbar(
                    'success',
                    'Berhasil menambahkan dana untuk pengeluaran!',
                );
            }, 2000);
        }
        reserveCount = changeReserveCounter(reserveCount);
        currentBalance = increaseBalance(currentReserve);
        currentReserveBalance = descreaseReserve(
            currentReserveBalance,
            currentReserve,
        );
    } else {
        initializedBalance();
        adjustBalanceBars(userBalance);
        resetInput(balanceAmount);
        cancelAssignBtn[0].classList.replace('hide', 'open');
    }
    adjustExpenseBars(
        userBalance,
        currentTotalExpenses,
        currentExpense,
        hasReserve,
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
