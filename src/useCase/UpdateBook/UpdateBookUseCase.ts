import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { IUpdateBookRequestDTO } from "./UpdateBookDTO";
export class UpdateBookUseCase {
    constructor(
        private booksRepository: IBooksRepository,
    ) { }
    async execute(data: IUpdateBookRequestDTO, id: string) {
        return await this.booksRepository.update(data, id);
    }
}