import { Header } from './component/header.js';
import { topheroes } from './component/topheroes.js';
import { herosearch } from './component/herosearch.js';
import { heroeslist } from './component/heroeslist.js';
import { newheroeform } from './component/newheroeform.js';

(() => {
    const main = () => {
        //const options = [{ path: './home.html', label: 'Home' }];

        new Header().render('#header');
        new topheroes().render('#topheroes');
        new herosearch().render('#herosearch');
        new heroeslist().render('#heroeslist');
        new newheroeform().render('#newheroeform');
        //new Menu(options).render('#menu');
        //new Footer().render('#footer');
    };
    document.addEventListener('DOMContentLoaded', main);
})();
