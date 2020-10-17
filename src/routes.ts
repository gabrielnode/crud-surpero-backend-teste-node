import { Router } from "express";
import { listBookController } from "./useCase/ListBook/index";
import { createBookController } from "./useCase/CreateBook/index";
import { updateBookController } from "./useCase/UpdateBook/index";
import { deleteBookController } from "./useCase/DeleteBook/index";

const router = Router()

router.get('/books', (request, response) => {
    return listBookController.handle(request, response);
});
router.post('/books', (request, response) => {
    return createBookController.handle(request, response);
});
router.put('/books/:id', (request, response) => {
    return updateBookController.handle(request, response);
});
router.delete('/books/:id', (request, response) => {
    return deleteBookController.handle(request, response);
});
export { router }