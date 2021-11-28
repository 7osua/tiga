const balanceBtn = document.getElementById('expense-balance__assign-button');
const paymentLink = document.getElementById('content__payments');
const billLink = document.getElementById('content__bills');
const savingLink = document.getElementById('content__savings');
const addShowContent = [balanceBtn, paymentLink, billLink, savingLink];

const expensesBar = document.getElementById('expenses-minus');
const balanceBar = document.getElementById('expenses-balance');
const expenseVal = document.querySelector('#expense-total__value span');
const balanceVal = document.querySelector('#expense-balance__value span');

const backdrop = document.getElementById('backdrop');
const balances = document.getElementById('balance');
const payments = document.getElementById('payment');
const bills = document.getElementById('bill');
const savings = document.getElementById('saving');

const balanceAmount = document.getElementById('balance-amount__value');
const savingAmount = document.getElementById('saving-amount__value');
const paymentTitle = document.getElementById('payment-title__value');
const paymentAmount = document.getElementById('payment-amount__value');
const billTitle = document.getElementById('bill-title__value');
const billAmount = document.getElementById('bill-amount__value');

const cancelAssignBtn = document.querySelectorAll('.assign-cancel');
const saveBalanceBtn = document.getElementById('save-balance');
const savePaymentBtn = document.getElementById('save-payment');
const saveBillBtn = document.getElementById('save-bill');
const saveSavingBtn = document.getElementById('save-saving');

function hideBackDrop() {
    backdrop.classList.remove('open');
}

function showBalanceContent() {
    backdrop.classList.toggle('open');
    balances.classList.toggle('open');
}

function showPaymentContent() {
    backdrop.classList.toggle('open');
    paymentLink.classList.toggle('active');
    payments.classList.toggle('open');
}

function showBillContent() {
    backdrop.classList.toggle('open');
    billLink.classList.toggle('active');
    bills.classList.toggle('open');
}

function showSavingContent() {
    backdrop.classList.toggle('open');
    savingLink.classList.toggle('active');
    savings.classList.toggle('open');
}

function hideDialog() {
    if (savings) {
        savings.classList.remove('open');
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

const adjustExpenseBalanceBars = (maxAmount) => {
    expensesBar.value = 0;
    expenseVal.textContent = 0;
    expensesBar.max = maxAmount;
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
