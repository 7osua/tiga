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

const snackbar = document.getElementById('snackbar');
const snackbarMessage = document.querySelector('.snackbar-message');

function showContent(linkItem, content, bkDrop) {
    bkDrop = backdrop;
    if (linkItem) {
        linkItem.classList.toggle('active');
    }
    bkDrop.classList.toggle('open');
    content.classList.toggle('open');
}

function showSnackbar(status, message) {
    snackbarMessage.textContent = message;
    snackbar.classList.add(status);
    snackbar.classList.add('slide');
    setTimeout(() => {
        snackbar.classList.remove(status);
        snackbar.classList.remove('slide');
    }, 2000);
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
        resetInput(reserveAmount);
    }
    if (payments) {
        payments.classList.remove('open');
        resetInput(paymentTitle);
        resetInput(paymentAmount);
    }
    if (bills) {
        bills.classList.remove('open');
        resetInput(billTitle);
        resetInput(billAmount);
    }
    if (balances) {
        balances.classList.remove('open');
        resetInput(balanceAmount);
    }
    backdrop.classList.remove('open');
}

const initContent = () => {
    const message = 'Ayo, tentukan batas pengeluaran maksimal mu!';
    showContent(null, balances);
    initBalance();
    snackbarTellToInit();
    cancelAssignBtn[0].classList.toggle('hide');
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
    reserveCounter.innerHTML =
        '<span class="material-icons-round">' +
        'upgrade' +
        '</span>' +
        ' : ' +
        `${val}`;
    return val;
};

const resetValue = (maxAmount, value) => {
    balanceBar.value = maxAmount;
    balanceBar.max = maxAmount;
    balanceVal.textContent = maxAmount;
    expensesBar.max = maxAmount;
    expenseVal.textContent = value;
    reserveCounter.textContent = value;
    reserveVal.textContent = value;
    expensesBar.value = value;
    snackbarResettingApp();
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

const initBalance = () => {
    if (balanceAmount) {
        balanceAmount.addEventListener('change', (e) => {
            maxExpense = e.target.value;
        });
    }
};

const getExpenseValue = (elmTitle, elemAmount) => {
    const title = elmTitle.value;
    const amount = elemAmount.value;
    return [title, amount];
};

const getReserveValue = (elemAmount) => {
    const amount = elemAmount.value;
    return amount;
};

const getReserveBalanceValue = (elemAmount) => {
    const amount = elemAmount.value;
    return amount;
};

const resetInput = (elm) => {
    elm.value = null;
};

window.addEventListener('load', initContent);
