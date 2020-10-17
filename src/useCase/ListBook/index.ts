import { ApiSuperoBookRepository } from '../../repositories/implementations/ApiSuperoBookRepository'
import { ListBookUseCase } from './ListBookUseCase'
import { ListBookController } from './ListBookController'

const apiSuperoBookRepository = new ApiSuperoBookRepository()

const listBookUseCase = new ListBookUseCase(
    apiSuperoBookRepository
)

const listBookController = new ListBookController(
    listBookUseCase
)

export { listBookUseCase, listBookController }