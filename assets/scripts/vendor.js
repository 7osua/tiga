const addBalance = document.getElementById('expense-balance__create-button');

const backdrop = document.getElementById('backdrop');
const insertBalance = document.querySelector('.insert-balance');

const cancelDialog = document.querySelectorAll('.proccess-cancel');
const payments = document.getElementById('payments');
const bills = document.getElementById('bills');
const savings = document.getElementById('savings');

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
    backdrop.style.display = 'none';
}

function showAddBalance() {
    backdrop.style.display = 'block';
    backdrop.classList.toggle('open');
    insertBalance.style.display = 'block';
    insertBalance.classList.toggle('open');
}

function showPayments() {
    backdrop.style.display = 'block';
    backdrop.classList.toggle('open');
    paymentLink.classList.toggle('active');
    payments.style.display = 'block';
    payments.classList.toggle('open');
}

function showBills() {
    backdrop.style.display = 'block';
    backdrop.classList.toggle('open');
    billLink.classList.toggle('active');
    bills.style.display = 'block';
    bills.classList.toggle('open');
}

function showSavings() {
    backdrop.style.display = 'block';
    backdrop.classList.toggle('open');
    savingLink.classList.toggle('active');
    savings.style.display = 'block';
    savings.classList.toggle('open');
}

function hideDialog() {
    if (insertBalance) {
        insertBalance.classList.remove('open');
        insertBalance.style.display = 'none';
    }
    if (payments) {
        payments.classList.remove('open');
        payments.style.display = 'none';
    }
    if (bills) {
        bills.classList.remove('open');
        bills.style.display = 'none';
    }
    if (savings) {
        savings.classList.remove('open');
        savings.style.display = 'none';
    }
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
}

addBalance.addEventListener('click', showAddBalance);
paymentLink.addEventListener('click', showPayments);
billLink.addEventListener('click', showBills);
savingLink.addEventListener('click', showSavings);
cancelDialog.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
backdrop.addEventListener('click', hideBackDrop);

balanceAmount.addEventListener('input', () => {
    console.log(balanceAmount.value);
});
