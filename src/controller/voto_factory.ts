interface voto {
     voto(message: JSON): void;
};

class votoEleitor implements voto {
     voto(message: JSON): void {
          console.log(message);
     }
};

export class votoFactory{
     public static createVoto(): voto {
          return new votoEleitor();
     }
}