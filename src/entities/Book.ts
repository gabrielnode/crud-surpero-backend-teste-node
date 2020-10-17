export class Book {
    titulo: string;
    isbn: string;
    autor: string;
    editora: string;
    ano: number;
    idioma: string;
    peso: number;
    comprimento: number;
    largura: number;
    altura: number;
    data?: {}

    constructor(props: Book) {
        Object.assign(this, props);
    }
}