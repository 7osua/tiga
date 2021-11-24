const root = document.getElementById('root');

const createSavings = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="savings">
                <div class="content-wrapper">
                    <div class="content-description">
                        <h2 class="content-title">Catatan untuk dana cadangan mu</h2>
                        <p class="content-text">
                            Tambah dana cadanganmu. Mulai berjaga-jaga jika 
                            saja pengeluaran lebih besar dari pada saldo mu 
                            saat ini. 
                        </p>
                    </div>
                    <div class="input-amount">
                        <input id="saving-amount" class="input-amount__number" type="number" placeholder="+ Rp. 500.000">
                        <label for="saving-amount" class="input-label">total</label>
                    </div>
                    <div class="proccess-action">
                        <button class="proccess__button proccess-cancel">Batal</button>
                        <button class="proccess__button">Simpan</button>
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
        <section id="bills">
            <div class="content-wrapper">
                <div class="content-description">
                    <h2 class="content-title">Mulai catat tagihan mu</h2>
                    <p class="content-text">
                        Semakin sering dicatat, kamu bisa 
                        tahu dana yang perlu disiapkan untuk setiap
                        tagihan mu.
                    </p>
                </div>
                <div class="input-title">
                    <input id="bill-title" class="input-title__text" type="text"  placeholder="Listrik">
                    <label class="bill-title">lebel</lebel>
                </div>
                <div class="input-amount">
                    <input id="bill-amount" class="input-amount__number"  type="number" placeholder="Rp. 49.000">
                    <label class="input-lebel">total</lebel>
                </div>
                <div class="proccess-action">
                    <button class="proccess__button proccess-cancel">Batal</button>
                    <button class="proccess__button">Simpan</button>
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
            <section id="payments">
               <div class="content-wrapper"> 
                    <div class="content-description">
                        <h2 class="content-title">Mulai catat pengeluaran mu</h2>
                        <p class="content-text">
                            Semakin sering dicatat, kamu bisa 
                            mengukur pengeluaran mu.
                        </p>
                    </div>
                    <div class="input-title">
                        <input id="payment-title" class="input-title__text" type="text" placeholder="Lalapan Ayam">
                        <label class="input-lebel">Lebel</label>
                    </div>
                    <div class="input-amount">
                        <input id="payment-amount" class="input-amount__number" type="number" placeholder="Rp. 10.000">
                        <label class="input-lebel">total</label>
                    </div>
                    <div class="proccess-action">
                        <button class="proccess__button proccess-cancel">Batal</button>
                        <button class="proccess__button">Simpan</button>
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
            <section class="insert-balance">
                <div class="insert-balance-container">
                    <div class="text-field-input">
                        <input id="balance-amount" type="number" placeholder="Anggaran . . .">
                        <label for="balance-amount" id="text-field__floating-label">Simpanan</label>
                    </div>
                    <div class="proccess-action">
                        <button type="button" class="proccess__button proccess-cancel">
                            Batal
                        </button>
                        <button type="button" class="proccess__button">
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
                    <progress id="expenses-minus" class="expenses-level" max=100 value=80></progress>
                    <div class="expenses-summary">
                        <span class="material-icons-round">
                            outbox 
                        </span>
                        <h2 id="expenses-total__value" class="expenses-value">
                            Rp. 3.000.000
                        <h2>
                    </div>
                </div>
                <div class="expenses-content">
                    <h3 class="expenses-title">Anggaran</h3>
                    <progress id="expenses-balance" class="expenses-level" max=100 value=100></progress>
                    <div class="expenses-summary">
                        <span class="material-icons-round">
                            account_balance_wallet 
                        </span>
                        <h2 id="expenses-balance__value" class="expenses-value">
                            Rp. 3.000.000
                        </h2>
                        <button id="expense-balance__assign-button">
                            + dana
                        </button>
                    </div>
                    <div class="expenses-summary">
                        <span class="material-icons-round">
                            move_to_inbox
                        </span> 
                        <h2 id="expenses-add__value" class="expenses-value">
                            Rp. 1.000.000
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
                        <a id="content__savings">
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
    createSavings();
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
