import express from 'express';
const router = express.Router();
import { getTodoLists, getTodoListById, postTodoList, putTodoList, deleteTodoList} from '../controllers/todoLists';
import { validateTodolistBody } from '../controllers/validation';
import{ensureLoggedIn} from 'connect-ensure-login'

const ensureLogIn = ensureLoggedIn();

router.get('/todolists/' ,getTodoLists);

router.get('/todolists/:id', getTodoListById);

router.post('/todolists', validateTodolistBody, postTodoList);

router.put('/todolists/:id',validateTodolistBody ,putTodoList)

router.delete('/todolists/:id', deleteTodoList)

export default router;
