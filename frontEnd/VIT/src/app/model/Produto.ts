import {Categoria} from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto{
    public id: number
    public nomeProduto: string
    public descricaoProduto: string
    public precoProduto: number
    public qtProduto: number
    public imgProduto: string
    public categoria: Categoria
    public usuario: Usuario
}