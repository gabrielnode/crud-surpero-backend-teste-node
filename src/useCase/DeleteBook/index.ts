import { ApiSuperoBookRepository } from '../../repositories/implementations/ApiSuperoBookRepository'
import { DeleteBookUseCase } from './DeleteBookUseCase'
import { DeleteBookController } from './DeleteBookController'

const apiSuperoBookRepository = new ApiSuperoBookRepository()

const deleteBookUseCase = new DeleteBookUseCase(
    apiSuperoBookRepository
)

const deleteBookController = new DeleteBookController(
    deleteBookUseCase
)

export { deleteBookUseCase, deleteBookController }