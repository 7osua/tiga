const userBalance = 400_000;
const userExpenses = 200_000;
let currentUserBalance = userBalance;
let currentUserExpense = userExpenses;
adjustExpenseBalanceBars(userBalance);

function assignExpensesForPayment() {
    if (currentUserBalance <= 0 || currentUserBalance < currentUserExpense) {
        alert('Anggaran untuk pengeluaranmu tidak cukup !');
        return;
    }
    setTimeout(() => {
        currentUserBalance = subtractBalance(currentUserExpense);
        currentUserExpense = addExpenses(currentUserExpense);
    }, 1000);
    hideDialog();
}

function assignExpensesForBill() {
    if (currentUserBalance <= 0 || currentUserBalance < currentUserExpense) {
        alert('Anggaran untuk pengeluaranmu tidak cukup !');
        return;
    }
    setTimeout(() => {
        currentUserBalance = subtractBalance(currentUserExpense);
        currentUserExpense = addExpenses(currentUserExpense);
    }, 1000);
    hideDialog();
}

savePaymentBtn.addEventListener('click', assignExpensesForPayment);
saveBillBtn.addEventListener('click', assignExpensesForBill);
paymentLink.addEventListener('click', showPaymentContent);

balanceBtn.addEventListener('click', showBalanceContent);
billLink.addEventListener('click', showBillContent);
savingLink.addEventListener('click', showSavingContent);
backdrop.addEventListener('click', hideBackDrop);

cancelAssignBtn.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
