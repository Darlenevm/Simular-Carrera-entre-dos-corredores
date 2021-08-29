class Simulation {
    constructor(){
        this.Participant1 = 0;
        this.Position1 = [];
        this.Participant2 = 0;
        this.Position2 = [];
        console.log(this.Carrera());
    }

    Dado(){
        return Math.floor( Math.random()*6 + 1);
    }

    Cuadros(probabilidad){
        if( probabilidad == 3) {
            return 3;
        } else if(probabilidad < 3) {
            return 1;
        } else if( probabilidad > 3)
            return 2;
    }
    Carrera(){
        for(let i = 0; i=100; i++){
            let tiro1 = this.Dado();
            let tiro2 = this.Dado();
            this.Participant1 += this.Cuadros(tiro1);
            this.Participant2 += this.Cuadros(tiro2);
            if(this.Participant1 >= 100 && this.Participant2 >= 100){
                i = 100 
                return "EMPATE";
            } else if( this.Participant1 >= 100 && this.Participant2 < 100) {
                i = 100
                return "Participant 1 GANADOR!";
            }else if( this.Participant2 >=100 && this.Participant1 <100) {
                i = 100 
                return "Participant 2 GANADOR!";
            }
        }
    }
}

new Simulation;