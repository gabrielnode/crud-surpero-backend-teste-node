import { Request, Response } from 'express'
import { DeleteBookUseCase } from './DeleteBookUseCase'
import { IDeleteBookRequestDTO } from './DeleteBookDTO'
export class DeleteBookController {
    constructor(
        private DeleteBookUseCase: DeleteBookUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { data } = await this.DeleteBookUseCase.execute(id)
            return response.status(201).json(data)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}