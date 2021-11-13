const addBalance = document.getElementById('expense-balance__create-button');
const backdrop = document.getElementById('backdrop');
const dialog = document.querySelector('.dialog');
const cancelDialog = document.querySelector('.dialog-cancel');

function showAddBalance() {
    backdrop.style.display = 'block';
    backdrop.classList.toggle('open');
    dialog.style.display = 'block';
    dialog.classList.toggle('open');
}

function hideDialog() {
    dialog.style.display = 'none';
    dialog.classList.remove('open');
    backdrop.style.display = 'none';
    backdrop.classList.remove('open');
}

    addBalance.addEventListener('click', showAddBalance);
    cancelDialog.addEventListener('click', hideDialog);
