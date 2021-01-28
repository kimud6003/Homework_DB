import Component from '../lib/component.js';
import store from '../store/index.js';

export default class List extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.submit_button')
        });
        this.contentElement = document.querySelector('.content-input');
        this.authorElement = document.querySelector('.author-input');
    }
    
    render() {
        let self = this;
        self.element.addEventListener('click',evt=>{
            evt.preventDefault();
            let contentValue = self.contentElement.value.trim(); 
            let authorValue = self.authorElement.value.trim();

            if(contentValue.length){
                store.dispatch('addItem',contentValue);
                self.contentElement.value="";
                self.contentElement.focus();
            }
            console.log(contentValue);
            console.log(authorElement.value.trim());
        })
    }
}
