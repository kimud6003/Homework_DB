import Component from '../lib/component.js';
import store from '../store/index.js';

export default class List extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.test')
        });
    }
    render() {
        let self = this;

        if(store.state.items.length === 0) {
            self.element.innerHTML = `<p class="no-items">메모 내역이 없습니다</p>`;
            return;
        }
        store.state.items.map(i =>{
            console.log(i);
        })
        
        self.element.innerHTML = `
            ${store.state.items.map(item => {
                return `
                    <tr>
                    <td>${item.content} </td>
                    <td>${item.author} </td>
                    <td>${item.date} </td>
                    <td><button aria-label="Delete this item">×</button></td>
                    <tr>
                `
            }).join('')}
        `;
        
        self.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                store.dispatch('clearItem', { index });
            });
        });
    }
};