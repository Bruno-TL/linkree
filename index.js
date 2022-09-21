class Nuvem {
    constructor() {
        this.x = window.innerWidth;
        this.y = 0;
        this.baseY = Math.random() * window.innerHeight;
        this.velocidadeX = Math.random() * 2;
        this.el = document.createElement('img');
        this.el.src = 'src/nuvem2.png';
        this.el.alt = 'nuvem';
        document.querySelector('#nuvem').appendChild(this.el);
    }

    movimentar() {
        this.x -= 3;
        this.y = this.baseY + Math.cos(this.x / 40) * 50;

        if (this.x <= 0) {
            this.x = window.innerWidth;
            this.baseY = Math.random() * 300;
        }

        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

let nuvens = [new Nuvem()];

setInterval(() => {
    for (let i = 0; i < nuvens.length; i++) {
        nuvens[i].movimentar();
    }
}, 33);

let novoEl = document.querySelector('#novo');
novoEl.addEventListener('click', () => {
    nuvens.push(new Nuvem());
});
