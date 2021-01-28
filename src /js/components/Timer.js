import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Timer extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.timer')
        });
    }
    Timer() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let Time = `${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
        this.element.innerHTML = Time;
    }
    
    render() {
        setInterval(this.Timer.bind(this),1000)
    }
}
