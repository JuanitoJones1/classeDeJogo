class Heroi {
    constructor(tipo, ataque) {
        this.tipo = tipo;
        this.ataque = ataque;
    }

apresentar() {
    console.log(`O heroi de tipo ${this.tipo} atacou usando ${this.ataque}.`);
    }
}

 const mago = new Heroi('mago', 'magia');
 const guerreiro = new Heroi('guerreiro', 'espada');
 const monge = new Heroi('monge', 'artes marciais');
 const ninja = new Heroi('ninja', 'shuriken');

 mago.apresentar();
 guerreiro.apresentar();
 monge.apresentar();
 ninja.apresentar();