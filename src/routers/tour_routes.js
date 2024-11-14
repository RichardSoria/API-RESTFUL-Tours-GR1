import {Router} from 'express'
import { createTourController, getTourController,getAlltourControll, updateTourController, deleteTourController } from '../controllers/tour_controller.js'
const router = Router()

router.get('/tours',getAlltourControll)

router.get('/tours/:id',getTourController)

router.post('/tours',createTourController)

router.put('/tours/:id',updateTourController)

router.delete('/tours/:id', deleteTourController)

export default router
