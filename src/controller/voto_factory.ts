interface voto {
     voto(message: JSON): void;
};

class votoEleitor implements voto {
     voto(message: JSON): void {
          console.log(`Seu voto na cerveja ${message} passou pela factory`);
     }
};

export class votoFactory{
     public static createVoto(): voto {
          return new votoEleitor();
     }
}