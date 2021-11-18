const root = document.getElementById('root');

const createSavings = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="savings">
                <div class="content-wrapper">
                    <div>
                        <h2>Cadangan</h2>
                        <p>Saat simpanan menipis. Cadanganmu akan otomatis terpotong</p>
                    </div>
                    <div>
                        <input placeholder="total">
                        <label>total</label>
                    </div>
                    <div>
                        <button class="dialog-cancel">Batal</button>
                        <button>Simpan</button>
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
                <div>
                    <input placeholder="lebel">
                    <label>lebel</lebel>
                </div>
                <div>
                    <input placeholder="kategori">
                    <label>Kategori</lebel>
                </div>
                <div>
                    <input placeholder="total">
                    <label>total</lebel>
                </div>
                <div>
                    <button class="dialog-cancel">Batal</button>
                    <button>Simpan</button>
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
               <div id="payments-content" class="content-form"> 
                    <div class="payment-title">
                        <input id="payment-title" placeholder="lebel">
                        <label>Lebel</label>
                    </div>
                    <div class="payment-category">
                        <input id="payment-category" placeholder="kategori">
                        <label>kategori</label> 
                    </div>
                    <div class="payment-amount">
                        <input id="payment-category" placeholder="Rp. 1.000.000">
                        <label>total</label>
                    </div>
                    <div class="dialog-action">
                        <button class="dialog__button dialog-cancel">Batal</button>
                        <button class="dialog__button">Simpan</button>
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
            <section class="dialog">
                <div class="dialog-container">
                    <div class="text-field-input">
                        <input id="text-field__hero-input" placeholder="Anggaran . . .">
                        <label for="text-field__hero-input" id="text-field__floating-label">Simpanan</label>
                    </div>
                    <div class="dialog-action">
                        <button type="button" class="dialog__button dialog-cancel">
                            Batal
                        </button>
                        <button type="button" class="dialog__button">
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

const createSavingLevel = function () {
    root.insertAdjacentHTML(
        'afterbegin',
        `
            <section id="money-level">
                <div class="money-level__content">
                    <h2 class="money-level__text">Pengeluaran</h2>
                    <progress id="money-level__expenses" max=100 value=80></progress>
                    <h2 class="money-level__text">Anggaran</h2>
                    <progress id="money-level__savings" max=100 value=100></progress>
                </div>
                <div id="expense__content">
                        <span class="material-icons-round content-icon">
                            account_balance_wallet
                        </span>
                        <p id="expense-balance">
                            Rp. 3.000.000
                        </p>
                        <button id="expense-balance__create-button">
                            Isi saldo
                        </button>
                    </button>
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
    createSavingLevel();
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
