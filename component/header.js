import { Component } from './component.js';

export class Header extends Component {
    template;
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
            <header>
                <h1>${title}</h1>
                <nav>
                    <ul>
                        <li><a>Dashboard</a></li>
                        <li><a>Heroes</a></li>
                    </ul>
                </nav>
            </header>`;
    }
}
