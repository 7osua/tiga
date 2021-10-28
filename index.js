const root = document.getElementById('root');

const header = () => {
    root.insertAdjacentHTML(
        'beforebegin',
        `
            <header class="head">
                  <div class="head-logo">
                        <img class="head-logo-image"
                             src="favicon_io/android-chrome-192x192.png"
                             alt="03.tiga">
                        <h1 class="head-logo-label">dua</h1>
                  </div>
            </header>
        `,
    );
};

const initPage = () => {
    header();
};

window.onload = initPage();
