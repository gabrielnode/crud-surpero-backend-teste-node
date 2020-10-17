import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";
import { api } from '../../services/api'

export class ApiSuperoBookRepository implements IBooksRepository {

    async get(): Promise<Book> {
        const books: Book = await api.get('/api/Livros');
        return books
    }
    async save(book: Book): Promise<Book> {
        const books: Book = await api.post('/api/Livros', book);
        return books
    }
    async update(book: Book, id: string): Promise<Book> {
        const books: Book = await api.put(`/api/Livros/${id}`, book);
        return books
    }
    async delete(id: string): Promise<Book> {
        const books: Book = await api.delete(`/api/Livros/${id}`);
        return books
    }
}