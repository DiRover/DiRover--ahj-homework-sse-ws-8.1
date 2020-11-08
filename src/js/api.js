import { container } from './app';

export default class API {
    constructor(url) {
        this.url = url;
    }

    getEventSource() {
        return new EventSource(this.url);
    }

    load(evt) {
        const data = JSON.parse(evt.data).field[0];
        const elem = document.createElement('div');
        elem.setAttribute('class', 'msg');
        elem.innerHTML = `<div class="icon"></div><p>${data.msg}</p>`;
        container.appendChild(elem);
    }
}