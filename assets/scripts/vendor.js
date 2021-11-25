const balanceBtn = document.getElementById('expense-balance__assign-button');

const backdrop = document.getElementById('backdrop');
const balances = document.querySelector('#balance');

const cancelDialog = document.querySelectorAll('.assign-cancel');
const payments = document.getElementById('payment');
const bills = document.getElementById('bill');
const savings = document.getElementById('saving');

const paymentLink = document.getElementById('content__payments');
const billLink = document.getElementById('content__bills');
const savingLink = document.getElementById('content__savings');

const balanceAmount = document.getElementById('balance-amount');
const savingAmount = document.getElementById('saving-amount');
const paymentTitle = document.getElementById('payment-title');
const paymentAmount = document.getElementById('payment-amount');
const billTitle = document.getElementById('bill-title');
const billAmount = document.getElementById('bill-amount');

function hideBackDrop() {
    backdrop.classList.remove('open');
}

function showAddBalance() {
    backdrop.classList.toggle('open');
    balances.classList.toggle('open');
}

function showPayments() {
    backdrop.classList.toggle('open');
    paymentLink.classList.toggle('active');
    payments.classList.toggle('open');
}

function showBills() {
    backdrop.classList.toggle('open');
    billLink.classList.toggle('active');
    bills.classList.toggle('open');
}

function showSavings() {
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

balanceBtn.addEventListener('click', showAddBalance);
paymentLink.addEventListener('click', showPayments);
billLink.addEventListener('click', showBills);
savingLink.addEventListener('click', showSavings);
cancelDialog.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
backdrop.addEventListener('click', hideBackDrop);
