import { Request, Response } from 'express'
import { UpdateBookUseCase } from './UpdateBookUseCase'
import { IUpdateBookRequestDTO } from './UpdateBookDTO'
export class UpdateBookController {
    constructor(
        private UpdateBookUseCase: UpdateBookUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const book = <IUpdateBookRequestDTO>request.body
            const { id } = request.params
            const { data } = await this.UpdateBookUseCase.execute(book, id)
            return response.status(201).json(data)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}