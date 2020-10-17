import { Book } from "../entities/Book";

export interface IBooksRepository {
    save(book: Book): Promise<Book>;
    update(book: Book, id: string): Promise<Book>;
    delete(id: string): Promise<Book>;
    get(): Promise<Book>;
}