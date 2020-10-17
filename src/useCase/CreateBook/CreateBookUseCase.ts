import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ICreateBookRequestDTO } from './CreateBookDTO';
import { Book } from '../../entities/Book';
export class CreateBookUseCase {
    constructor(
        private booksRepository: IBooksRepository,
    ) { }
    async execute(data: ICreateBookRequestDTO) {

        const books = new Book(data);

        return await this.booksRepository.save(books);
    }
}