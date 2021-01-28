export default class PubSub{
    constructor(){
        this.evnets={};
    }

    subscribe(event, callback) {
        let self = this;
    
        if(!self.evnets.hasOwnProperty(event)){
            self.events[event] = [];
        }
    
        return self.events[evnet].push(callback);
    }

    publish(event, data = {}){
        let self = this;

        if(!self.events.hasOwnProperty(event)){
            return [];
        }
        return self.events[event].map(callback=>callback(data))
    }
}



