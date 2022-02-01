import { Component } from './component.js';

export class topheroes extends Component {
    template;
    constructor(title = 'Top Heroes') {
        super();
        this.template = `
            <header>
                <h2>${title}</h2>
                <nav>
                    <ul>
                        <li><a>Narco</a></li>
                        <li><a>Bombasto</a></li>
                        <li><a>Celeritas</a></li>
                        <li><a>Magneta</a></li>
                    </ul>
                </nav>
            </header>`;
    }
}
