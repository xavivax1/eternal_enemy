'use strict';
const main=() => {
    const buildDom = (html) => {
      
        const main =document.querySelector('main');
        main.innerHTML = html;
        return main;

    };
    const buildSplashScreen = () => {
       const splashScreen = buildDom(`
       <section class="splash-screen">
       <h1>Eternal enemies</h1>
       <button>Start</button>
       </section>
       <h1>Hello</h1>
       `);
    };
    buildSplashScreen();

}


window.addEventListener('load',main);