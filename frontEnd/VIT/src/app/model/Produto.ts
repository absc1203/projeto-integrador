import { from } from "rxjs"
import {Categoria} from "./Categoria"

export class Produto{
    public id: number
    public nomeProduto: string
    public descricaoProduto: string
    public precoProduto: number
    public qtProduto: number
    public imgProduto: string
    public categoria: Categoria[]
}