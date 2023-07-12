import {Type, Transform, Expose} from 'class-transformer';

export class user{
    @Expose({name: "id"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number") return Number(value);
        else throw {status: 401, message: "Si no pone el id bien, le borro sistem 32 a la siguiente, queda advertido."};
    })
    ID:number
    @Expose({name: "nombre"})
    NOM:string
    @Expose({name: "edad"})
    AGE:number

    constructor(p1:number, p2:string, p3:number){
        this.ID = p1;
        this.NOM = p2;
        this.AGE = p3;
    }
}