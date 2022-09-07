export class Subject {
     state!: string;
     observerList: Observer[] = [];
   
     setState(state: string): void {
       this.state = state;
       this.notifyObservers();
     }
   
     getState(): string {
       return this.state;
     }
   
     addObserver(observer: Observer) {
       this.observerList.push(observer);
     }
   
     notifyObservers(): void {
       for (let obs of this.observerList) {
         obs.update();
       }
     }
   }
   
   export abstract class Observer {
     protected subject!: Subject;
     update() : void {};
   }
   
   