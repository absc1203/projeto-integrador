import { Postagem } from "./Postagem"

export class Tema{
    public id: number 
    public descricao: string 
    public postagem: Postagem[] //como se trata de um array de postagens, é preciso
                                //colocar os colchetes '[]'

}