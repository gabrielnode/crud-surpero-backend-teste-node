import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { IDeleteBookRequestDTO } from "./DeleteBookDTO";

export class DeleteBookUseCase {
    constructor(
        private booksRepository: IBooksRepository,
    ) { }
    async execute(id: string) {
        return await this.booksRepository.delete(id);
    }
}