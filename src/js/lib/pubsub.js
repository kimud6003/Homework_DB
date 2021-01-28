// +
export default class PubSub{
    constructor(){
        // 클래스 생성과 동시에 Events 객체 생성
        this.events={};
    }
    // 쉽게 생각하면 {"추가":원하는 메소드} 같은 형식으로 함수의 이름과 함수를 넣어주는 메소드 
    subscribe(event,callback){
        let events = this.events;
        if(!events.hasOwnProperty(event)){
            events[event]=[];
        }
        return events[event].push(callback);
    }
    // subscribe에서 추가한 메소드를 가져와서 실행 시키는 항목 
    publish(event,data={}){
        let events = this.events;
        if(!events.hasOwnProperty(event)){
            return[]
        }
        return events[event].map(callback=>callback(data));
    }

}
