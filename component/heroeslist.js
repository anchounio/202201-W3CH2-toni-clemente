import { Component } from './component.js';

export class heroeslist extends Component {
    template;
    constructor(title = 'Tour of Heroes') {
        super();
        this.template = `
            <section>
                <h1>${title}</h1>
                <nav>
                    <ul>
                        <li><a>Dashboard</a></li>`;

        const heroes = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' },
        ]`
                    </ul>
                </nav>
            </section>`;
    }
}
