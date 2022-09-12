import { database } from "../model/database";
import { Subject, Observer } from "./voto_observer";

export class AtualizandoBanco extends Observer {
     constructor(subject: Subject) {
       super();
       this.subject = subject;
       this.subject.addObserver(this);
     }
   
     update(): void {
       database.sync();
       console.log("-----------------------------------------------");
       console.log("Email do voto:", this.subject.getState())
       console.log("Banco de Dados Atualizado e sincronizado!");
       console.log("-----------------------------------------------");
     }
   }
   