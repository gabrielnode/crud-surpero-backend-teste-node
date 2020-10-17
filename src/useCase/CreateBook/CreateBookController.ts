import { Request, Response } from 'express'
import { CreateBookUseCase } from './CreateBookUseCase'

export class CreateBookController {
    constructor(
        private createBookUseCase: CreateBookUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const { data } = await this.createBookUseCase.execute(request.body)
            return response.status(201).json(data);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}