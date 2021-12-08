const snackbarTellToInit = () => {
    showSnackbar('default', 'Ayo tentukan batas pengeluaran mu saat ini');
};
const snackbarInitBalance = () => {
    showSnackbar('success', 'Inisialisasi anggaran untuk pengeluaran berhasil');
};

const snackbarBalanceEmpty = () => {
    showSnackbar('warning', 'Dana untuk pengeluaran telah habis');
};

const snackbarPaymentSuccess = (type) => {
    type === 'payment'
        ? showSnackbar('success', 'Pembayaran mu berhasil dicatat')
        : showSnackbar('success', 'Tagihan mu berhasil dicatat');
};
const snackbarPaymentFailed = (type) => {
    type === 'payment'
        ? showSnackbar('danger', 'Dana untuk pembayaran tidak cukup')
        : showSnackbar('danger', 'Dana untuk tagihan tidak cukup');
};

const snackbarReserve = () => {
    showSnackbar('default', 'Dana cadangan berhasil dibuat!');
};

const snackbarReserveToBalanceSuccess = () => {
    showSnackbar('success', 'Menambah dana pengeluaran berhasil!');
};

const snackbarEmptyReserveBalance = () => {
    showSnackbar('warning', 'Dana cadangan masih kosong!');
};

const snackbarFailedMeetMaxExpense = (maxVal) => {
    showSnackbar('danger', 'Gagal menambah, max  pengeluaran Rp. ' + maxVal);
};

const snackbarEmptyReserve = () => {
    showSnackbar('warning', 'Semua Dana cadangan telah terpakai!');
};

const snackbarReserveBalanceMinus = () => {
    showSnackbar('warning', 'Dana cadangan tidak cukup!');
};

const snackbarResettingApp = () => {
    showSnackbar(
        'default',
        'Dana pengeluaran dan cadangan telah habis, memuat ulang!',
    );
};
