const root = document.getElementById('root');

const createHistories = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="histories">
                <div>
                    <h2>Daftar Catatan Keuangan Mu</h2>
                </div>
                <div>
                    <p>
                        Cooming soon !
                    </p>
                </div>
            </section>
        `,
    );
};

const createSnackbar = function () {
    root.insertAdjacentHTML(
        'beforeend',
        `  
            <div id="snackbar" >
                <span class="snackbar-indicator"></span>
                <div class="snackbar-content">
                    <p class="snackbar-message">Pesan ini akan muncul sebagai pesan singkat</p>
                </div>
                <div class="snackbar-action">
                    <button>
                        <span class="material-icons-round">
                            close
                        </span>
                    </button>
                </div>
            
            </div>
        `,
    );
};
const createReserves = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="reserve" class="wrapper">
                <div id="reserve-set" class="content-item">
                    <p class="content-description">
                        Tambah dana cadanganmu. Mulai berjaga-jaga jika 
                        saja pengeluaran lebih besar dari pada saldo mu 
                        saat ini. <strong> Dana cadangan hanya bisa 1X dimasukkan !</strong> 
                    </p>
                    <div class="reserve-assign">
                        <input id="reserve-amount__value" type="number" placeholder="+ Rp. 500.000">
                    </div>
                    <div class="reserve-action">
                        <button class="proccess__button assign-cancel">Batal</button>
                        <button id="save-reserve" class="proccess__button">Simpan</button>
                     </div>
                </div>
            </sectio>
        `,
    );
};

const createBills = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="bill" class="wrapper">
                <div id="bill-set" class="content-item">
                    <p class="content-description">
                        Semakin sering dicatat, kamu bisa 
                        tahu dana yang perlu disiapkan untuk setiap
                        tagihan.
                    </p>
                    <div class="bill-assign">
                        <input id="bill-title__value" type="text"  placeholder="Listrik">
                        <input id="bill-amount__value" type="number" placeholder="Rp. 49.000">
                    </div>
                    <div class="bill-action">
                        <button class="proccess__button assign-cancel">Batal</button>
                        <button id="save-bill" class="proccess__button">Simpan</button>
                    </div>
                </div>
            </section>
    `,
    );
};

const createPayments = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="payment" class="wrapper">
               <div id="payment-set" class="content-item"> 
                    <p class="content-description">
                        Catat pembayaran saat ini. Jadi Kamu bisa 
                        mengukur pengeluaran saat berbelanja atau  
                        melakukan pembelian.
                    </p>
                    <div class="payment-assign">
                        <input id="payment-title__value" type="text" placeholder="Lalapan Ayam">
                        <input id="payment-amount__value" type="number" placeholder="Rp. 10.000">
                    </div>
                    <div class="payment-action">
                        <button class="proccess__button assign-cancel">Batal</button>
                        <button id="save-payment" class="proccess__button">Simpan</button>
                    </div>
                </div>
            </section>
        `,
    );
};

const createBalance = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="balance" class="wrapper">
                <div id="balance-set" class="content-item">
                    <p class="content-description">Maksimal atau batas pengeluaran mu untuk saat ini.</p>
                    <div class="balance-assign">
                        <input id="balance-amount__value" type="number" placeholder="Anggaran . . .">
                    </div>
                    <div class="balance-action">
                        <button  class="proccess__button assign-cancel" type="button">
                            Batal
                        </button>
                        <button id="save-balance" class="proccess__button" type="button">
                            Simpan 
                        </button>
                    </div>
                </div>
            </section>
        `,
    );
};

const createBackdrop = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <div id="backdrop"></div>
        `,
    );
};

const createExpenses = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="expenses">
                <div class="expenses-content">
                    <h3 class="expenses-title">Pengeluaran</h3>
                    <progress id="expenses-minus" class="expenses-level" max=100 value=0></progress>
                    <div class="expenses-summary">
                        <span class="material-icons-round">
                            outbox 
                        </span>
                        <h2 id="expense-total__value" class="expenses-value">
                            Rp. <span>0</span>
                        <h2>
                    </div>
                </div>
                <div class="expenses-content">
                    <h3 class="expenses-title">Anggaran</h3>
                    <progress id="expenses-balance" class="expenses-level" max=100 value=0></progress>
                    <div class="expenses-summary">
                        <span class="material-icons-round">
                            account_balance_wallet 
                        </span>
                        <h2 id="expense-balance__value" class="expenses-value">
                            Rp. <span>0</span>
                        </h2>
                        <button id="expense-balance__assign-button">
                            + dana
                        </button>
                    </div>
                    <div class="expenses-summary">
                        <span class="material-icons-round">
                            move_to_inbox
                        </span> 
                        <h2 id="expense-reserve__value" class="expenses-value">
                            Rp.
                            <span>
                                0
                            </span>
                        </h2>
                        <p id="expenses-add__counter">
                            0
                        </P>
                    </div>
                </div>
            </section>
        `,
    );
};

const createHeader = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <header class="head">
                  <div class="head-logo">
                        <img class="head-logo-image"
                             src="favicon_io/android-chrome-192x192.png"
                             alt="03.tiga">
                        <h1 class="head-logo-label">tiga</h1>
                  </div>
            </header>
        `,
    );
};

const createAppBar = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="app-bar">
            <h3 class="app-bar__title">NO. 03</h3>
        </div>
        `,
    );
};

const createNavigatioRail = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <nav class="menu">
                <ul class="contents">
                    <li class="content">
                        <a id="content__payments">
                            <span class="material-icons-round content-icon">
                               payment 
                            </span>    
                            <p class="content-label">Bayaran</p>
                        </a>
                    </li>
                    <li class="content">
                        <a id="content__bills">
                            <span class="material-icons-round content-icon">
                               payments 
                            </span>    
                            <p class="content-label">Tagihan</p>
                        </a>
                    </li>
                    <li class="content">
                        <a id="content__reserves">
                            <span class="material-icons-round content-icon">
                               savings 
                            </span>    
                            <p class="content-label">Cadangan</p>
                        </a>
                    </li>
                    <li class="content">
                        <a id="content__histories">
                            <span class="material-icons-round content-icon">
                               receipt_long   
                            </span>    
                            <p class="content-label">Laporan</p>
                        </a>
                    </li>
                </ul>
            </ul>
          </nav>  
        
        `,
    );
};

const initPage = () => {
    createSnackbar();
    createHistories();
    createReserves();
    createBills();
    createPayments();
    createExpenses();
    createHeader();
    createBalance();
    createBackdrop();
    createNavigatioRail();
    createAppBar();
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('servWork.js')
        .then((registration) => {
            console.log('Service Worker Registered !');
            console.log(registration);
        })
        .catch((error) => {
            console.log('Sevice Worker Registration Failed !');
            console.log(error);
        });
}

window.onload = initPage();
