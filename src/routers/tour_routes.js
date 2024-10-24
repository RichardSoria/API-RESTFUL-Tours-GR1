import {Router} from 'express'
import { getAlltourControll } from '../controllers/tour_controller.js'
const router = Router()

router.get('/tours',getAlltourControll)

export default router
