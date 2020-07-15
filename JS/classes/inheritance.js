class Animal {
    constructor(name){
        this.name = name;
    }

    eat(food){
        console.log(`${this.name} is eating ${food}`);
    }
}

class Dog extends Animal {
    
    constructor(name, favToy){
        super(name);
        this.favToy = favToy;
    }

    play(){
        console.log(`${this.name} is playing with his ${this.favToy}`);
    }
}