
import {Router} from "express"
import {createPeliculas, getPeliculas,getPeliculasById,updatePeliculas,deletePeliculas } from "../controllers/peliculas.controller.js"
const router = Router()


//verbos...


router.get('/peliculas',getPeliculas)
router.get('/peliculas/:id',getPeliculasById)

router.post('/peliculas',createPeliculas)
router.put('/peliculas',updatePeliculas)
router.delete('/peliculas/:id',deletePeliculas)

export default router