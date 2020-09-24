import { Router, Request,Response } from 'express'
import { getTasks, saveTask, getTask, updateTask, fineshedTask, removeTask} from './controller/TasksController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: 'hello, World!'})
})

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.patch('/tasks/:id', fineshedTask)
routes.delete('/tasks/:id', removeTask)


export default routes