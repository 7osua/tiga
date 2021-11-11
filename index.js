const root = document.getElementById('root');

const createHeader = () => {
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
                            circle
                        </span>    
                        <p class="content-label">Menu 1</p>
                    </li>
                    <li class="content">
                        <span class="material-icons-round content-icon">
                            circle
                        </span>    
                        <p class="content-label">Menu 2</p>
                    </li>
                    <li class="content">
                        <span class="material-icons-round content-icon">
                            circle
                        </span>    
                        <p class="content-label">Menu 3</p>
                    </li>
                    <li class="content">
                        <span class="material-icons-round content-icon">
                            circle
                        </span>    
                        <p class="content-label">Menu 4</p>
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
};

window.onload = initPage();
