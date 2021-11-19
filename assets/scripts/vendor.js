const addBalance = document.getElementById('expense-balance__create-button');

const backdrop = document.getElementById('backdrop');
const dialog = document.querySelector('.dialog');

const cancelDialog = document.querySelectorAll('.proccess-cancel');
const payments = document.getElementById('payments');
const bills = document.getElementById('bills');
const savings = document.getElementById('savings');

const paymentLink = document.getElementById('content__payments');
const billLink = document.getElementById('content__bills');
const savingLink = document.getElementById('content__savings');

function hideBackDrop() {
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
}

function showAddBalance() {
    backdrop.style.display = 'block';
    backdrop.classList.toggle('open');
    dialog.style.display = 'block';
    dialog.classList.toggle('open');
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
    if (dialog) {
        dialog.classList.remove('open');
        dialog.style.display = 'none';
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
    backdrop.style.display = 'none';
    backdrop.classList.remove('open');
}

addBalance.addEventListener('click', showAddBalance);
paymentLink.addEventListener('click', showPayments);
billLink.addEventListener('click', showBills);
savingLink.addEventListener('click', showSavings);
// cancelDialog.addEventListener('click', hideDialog);
console.log(cancelDialog);
cancelDialog.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});

backdrop.addEventListener('click', hideBackDrop);
