const userBalance = 300_000;
const userExpenses = 200_000;
let currentUserBalance = userBalance;
let currentUserExpenses = userExpenses;
adjustExpenseBalanceBars(userBalance);

function addExpenses() {
    hideDialog();
    if (currentUserBalance <= 0 || currentUserBalance < currentUserExpenses) {
        alert('Uang tra cukup !');
    }
    setTimeout(() => {
        currentUserBalance = subtractBalance(currentUserExpenses);
        console.log(currentUserBalance, currentUserExpenses);
    }, 1000);
}

savePayment.addEventListener('click', addExpenses);
paymentLink.addEventListener('click', showPaymentContent);

balanceBtn.addEventListener('click', showBalanceContent);
billLink.addEventListener('click', showBillContent);
savingLink.addEventListener('click', showSavingContent);
backdrop.addEventListener('click', hideBackDrop);

cancelAssignBtn.forEach(function (elem) {
    elem.addEventListener('click', hideDialog);
});
