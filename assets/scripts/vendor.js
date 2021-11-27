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
const savingAmount = document.getElementById('saving-amount');
const paymentTitle = document.getElementById('payment-title');
const paymentAmount = document.getElementById('payment-amount');
const billTitle = document.getElementById('bill-title');
const billAmount = document.getElementById('bill-amount');

const cancelAssignBtn = document.querySelectorAll('.assign-cancel');
const saveBalanceBtn = document.getElementById('save-balance');
const saveBillBtn = document.getElementById('save-bill');
const saveSavingBtn = document.getElementById('save-saving');

function hideBackDrop() {
    backdrop.classList.remove('open');
}

function showDialog() {
    backdrop.classList.toggle('open');
    if (balanceBtn) {
        balances.classList.toggle('open');
    } else if (paymentLink) {
        paymentLink.classList.toggle('active');
        payments.classList.toggle('open');
    } else if (billLink) {
        billLink.classList.toggle('active');
        bills.classList.toggle('open');
    } else {
        savingLink.classList.toggle('active');
        savings.classList.toggle('open');
    }
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
    expensesBar.max = maxAmount;
    expensesBar.value = 0;
    balanceBar.max = maxAmount;
    balanceBar.value = maxAmount;
};

const dealtExpense = (expenseAmount) => {
    expensesBar.value += expenseAmount;
    balanceBar.value -= expenseAmount;
};

const putValue = (amount) => {
    (isNaN(amount) && adjustExpenseBalanceBars(0)) ||
        adjustExpenseBalanceBars(amount);

    expenseVal.textContent = 0;
    balanceVal.textContent = amount;
};

const getUserBudget = () => {
    const budgetVal = parseInt(balanceAmount.value);
    balanceAmount.value = null;
    hideDialog();
    hideBackDrop();
    putValue(budgetVal);
};

addShowContent.forEach((elm) => {
    elm.addEventListener('click', showDialog);
});

backdrop.addEventListener('click', hideBackDrop);
cancelAssignBtn.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
saveBalanceBtn.addEventListener('click', getUserBudget);
