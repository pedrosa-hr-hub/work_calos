import { Subject, Observer } from "./voto_observer";

export class EmailModule extends Observer {
     constructor(subject: Subject) {
       super();
       this.subject = subject;
       this.subject.addObserver(this);
     }
   
     update(): void {
       console.log("Enviando e-mail", this.subject.getState());
     }
   }
   