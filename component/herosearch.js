import { Component } from './component.js';

export class herosearch extends Component {
    template;
    constructor(title = 'Hero Search') {
        super();
        this.template = `
            <section>
                <h2>${title}</h2>
                    <form >
                            <input type="text" id="addheroe" placeholder="Add heroe" />
                    </form>
            </section>`;
    }
}
