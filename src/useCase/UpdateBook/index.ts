import { ApiSuperoBookRepository } from '../../repositories/implementations/ApiSuperoBookRepository'
import { UpdateBookUseCase } from './UpdateBookUseCase'
import { UpdateBookController } from './UpdateBookController'

const apiSuperoBookRepository = new ApiSuperoBookRepository()

const updateBookUseCase = new UpdateBookUseCase(
    apiSuperoBookRepository
)

const updateBookController = new UpdateBookController(
    updateBookUseCase
)

export { updateBookUseCase, updateBookController }