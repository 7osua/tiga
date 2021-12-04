let hasInitialized = false;
let maxExpense;

let title = '';
let userBalance = 0;
let userPayment = 0;
let userBill = 0;
const userExpense = 0;
const userReserve = 200_000;
const typeForPay = 'payment';
const typeForBill = 'bill';

let currentBalance = 0;
let currentPayment = 0;
let currentBill = 0;
let currentExpense = 0;
let currentReserve = 0;
let currentReserveBalance = 0;
let currentTotalExpenses = userBalance;

let hasReserve = false;
let reserveCount = 0;
let maxToReserve = 4;

const transactionLogs = [];

function notSpecified(val) {
    if (isNaN(val) || val <= 0) {
        return 100_000;
    }
    return val;
}

function initializedBalance() {
    hasInitialized = true;
    maxExpense = parseInt(maxExpense);
    maxExpense = notSpecified(maxExpense);
    userBalance = maxExpense;
    currentBalance = maxExpense;
}

function initializedExpense(typeExpense) {
    if (!currentTitle || currentTitle === '' || currentTitle === undefined) {
        currentTitle = 'Default';
    }
    if (typeExpense === typeForPay) {
        currentTitle += ' For Paying';
        currentPayment = parseInt(currentPayment);
        currentPayment = notSpecified(currentPayment);
    } else {
        currentTitle += ' For Billing';
        currentBill = parseInt(currentBill);
        currentBill = notSpecified(currentBill);
    }
}

function assignReserveToBalance() {
    if (hasInitialized) {
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
        cancelAssignBtn[0].style.display = 'block';
    }
    adjustExpenseBars(
        userBalance,
        currentTotalExpenses,
        currentExpense,
        hasReserve,
    );
    hideDialog();
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
            maxToReserve = 4;
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
        alert('Anggaran untuk pengeluaranmu tidak cukup !');
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
    currentReserveBalance = userReserve;
    adjustReserve(currentReserveBalance);
    hideDialog();
    preventReserve();
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
