const balanceBtn = document.getElementById('expense-balance__assign-button');
const paymentLink = document.getElementById('content__payments');
const billLink = document.getElementById('content__bills');
const reserveLink = document.getElementById('content__reserves');

const expensesBar = document.getElementById('expenses-minus');
const balanceBar = document.getElementById('expenses-balance');
const expenseVal = document.querySelector('#expense-total__value span');
const balanceVal = document.querySelector('#expense-balance__value span');
const reserveVal = document.querySelector('#expense-reserve__value span');

const backdrop = document.getElementById('backdrop');
const balances = document.getElementById('balance');
const payments = document.getElementById('payment');
const bills = document.getElementById('bill');
const reserves = document.getElementById('reserve');

const balanceAmount = document.getElementById('balance-amount__value');
const reserveAmount = document.getElementById('reserve-amount__value');
const reserveCounter = document.getElementById('expenses-add__counter');
const paymentTitle = document.getElementById('payment-title__value');
const paymentAmount = document.getElementById('payment-amount__value');
const billTitle = document.getElementById('bill-title__value');
const billAmount = document.getElementById('bill-amount__value');

const cancelAssignBtn = document.querySelectorAll('.assign-cancel');
const saveBalanceBtn = document.getElementById('save-balance');
const savePaymentBtn = document.getElementById('save-payment');
const saveBillBtn = document.getElementById('save-bill');
const saveReserveBtn = document.getElementById('save-reserve');

function showContent(linkItem, content, bkDrop) {
    bkDrop = backdrop;
    if (linkItem) {
        linkItem.classList.toggle('active');
    }
    bkDrop.classList.toggle('open');
    content.classList.toggle('open');
}

function showBalanceContent() {
    showContent(null, balances);
}

function showPaymentContent() {
    backdrop.classList.toggle('open');
    showContent(paymentLink, payments);
}

function showBillContent() {
    backdrop.classList.toggle('open');
    showContent(billLink, bills);
}

function showReserveContent() {
    backdrop.classList.toggle('open');
    showContent(reserveLink, reserves);
}

function hideDialog() {
    if (reserves) {
        reserves.classList.remove('open');
    }
    if (payments) {
        payments.classList.remove('open');
    }
    if (bills) {
        bills.classList.remove('open');
    }
    if (balances) {
        balances.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

const initContent = () => {
    showContent(null, balances);
    cancelAssignBtn[0].style.display = 'none';
    initBalance();
};

const adjustExpenseBars = (maxAmount, totalAmount, amount, hasReserve) => {
    let totalOfExpense = maxAmount;
    if (hasReserve) {
        totalOfExpense = totalAmount;
    }
    expensesBar.value = amount;
    expenseVal.textContent = amount;
    expensesBar.max = totalOfExpense;
};

const adjustBalanceBars = (maxAmount) => {
    balanceBar.value = maxAmount;
    balanceVal.textContent = maxAmount;
    balanceBar.max = maxAmount;
};

const addExpenses = (userExpenses) => {
    expensesBar.value += userExpenses;
    expenseVal.textContent = expensesBar.value;
    return expensesBar.value;
};

const subtractBalance = (userExpenses) => {
    balanceBar.value -= userExpenses;
    balanceVal.textContent = balanceBar.value;
    return balanceBar.value;
};

const adjustReserve = (resAmount) => {
    reserveVal.textContent = resAmount;
};

const increaseBalance = (resValue) => {
    balanceBar.value += resValue;
    balanceVal.textContent = balanceBar.value;
    return balanceBar.value;
};

const descreaseReserve = (resBalanceValue, resValue) => {
    resBalanceValue -= resValue;
    reserveVal.textContent = resBalanceValue;
    return resBalanceValue;
};

const changeReserveCounter = (countVal) => {
    let val = countVal;
    reserveCounter.textContent = `\n \u21A5 : ${val} \n`;
    return val;
};

const resetValue = (maxAmount, value) => {
    balanceBar.value = maxAmount;
    balanceBar.max = maxAmount;
    balanceVal.textContent = maxAmount;
    expensesBar.value = value;
    expensesBar.max = maxAmount;
    expenseVal.textContent = value;
    reserveCounter.textContent = value;
    reserveVal.textContent = value;
};

const reserveEvent = (elmLink, elmBtn) => {
    elmBtn.style.display = 'block';
    elmLink.classList.replace('deactive', 'active');
};

const preventReserve = () => {
    saveReserveBtn.style.display = 'none';
    reserveLink.classList.remove('active');
    reserveLink.classList.toggle('deactive');
};

const getBalance = (elm) => {
    return elm.value;
};

const initBalance = () => {
    balanceAmount.addEventListener('change', (e) => {
        maxExpense = e.target.value;
        e.target.value = null;
    });
    cancelAssignBtn[0].style.display = 'block';
};

window.addEventListener('load', initContent);
