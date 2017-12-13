export class Hero {
    id: number;
    name: string;
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    toString(){
        return `${this.name}`
    }
}