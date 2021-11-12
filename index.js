const root = document.getElementById('root');

const createSavingLevel = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <section id="money-level">
                <div class="money-level__content">
                    <h2 class="money-level__text">Pengeluaran</h2>
                    <progress id="money-level__expenses" max=100 value=80></progress>
                    <h2 class="money-level__text">Simpanan</h2>
                    <progress id="money-level__savings" max=100 value=100></progress>
                </div>
            </section>
        `
    );
};

const createHeader = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
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
    document.body.insertAdjacentHTML(
        'beforeend',
        `
        <div class="app-bar">
            <h3 class="app-bar__title">NO. 03</h3>
        </div>
    `,
    );
};

const createNavigatioRail = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <nav class="menu">
                <ul class="contents">
                    <li class="content">
                        <span class="material-icons-round content-icon">
                           payment 
                        </span>    
                        <p class="content-label">Bayaran</p>
                    </li>
                    <li class="content">
                        <span class="material-icons-round content-icon">
                           payments 
                        </span>    
                        <p class="content-label">Tagihan</p>
                    </li>
                    <li class="content">
                        <span class="material-icons-round content-icon">
                           savings 
                        </span>    
                        <p class="content-label">Tabungan</p>
                    </li>
                    <li class="content">
                        <span class="material-icons-round content-icon">
                           receipt_long   
                        </span>    
                        <p class="content-label">Laporan</p>
                    </li>
                </ul>
            </ul>
          </nav>  
        
        `,
    );
};

const initPage = () => {
    createAppBar();
    createNavigatioRail();
    createHeader();
    createSavingLevel();
};

window.onload = initPage();
