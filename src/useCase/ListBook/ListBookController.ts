import { Request, Response } from 'express'
import { ListBookUseCase } from './ListBookUseCase'

export class ListBookController {
    constructor(
        private listBookUseCase: ListBookUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { data } = await this.listBookUseCase.execute()
            return response.status(201).json(data)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}