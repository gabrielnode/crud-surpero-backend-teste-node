import { IBooksRepository } from "../../repositories/IBooksRepository";
export class ListBookUseCase {
    constructor(
        private booksRepository: IBooksRepository,
    ) { }
    async execute() {
        return await this.booksRepository.get();
    }
}