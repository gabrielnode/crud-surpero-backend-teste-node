import { ApiSuperoBookRepository } from '../../repositories/implementations/ApiSuperoBookRepository'
import { CreateBookUseCase } from './CreateBookUseCase'
import { CreateBookController } from './CreateBookController'

const apiSuperoBookRepository = new ApiSuperoBookRepository()

const createBookUseCase = new CreateBookUseCase(
    apiSuperoBookRepository
)

const createBookController = new CreateBookController(
    createBookUseCase
)

export { createBookUseCase, createBookController }