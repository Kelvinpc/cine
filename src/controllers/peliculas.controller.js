import {pool} from "../db.js"

export const getPeliculas= async(req,res) => {
  const [rows] = await pool.query("SELECT * FROM peliculas")
  res.json(rows)
}

export const getPeliculasById= async(req,res) => {
  const [rows] = await pool.query("SELECT * FROM peliculas WHERE id = ?", [req,URLSearchParams.id])
  if(rows.length<= 0)return res.status(400).json({
    message: 'No existe pelicula con este ID'
  })
  res.json(rows)
}

export const createPeliculas= async(req,res) => {

  const {titulo,duracionmin, clasificacion,lanzamiento} = req.body

  const [rows]=query("INSERT INTO peliculas FROM peliculas (titulo,duracionmin,clasificacion,lanzamiento)VALUES(?,?,?,?)",

  [titulo, duracionmin,clasificacion , lanzamiento])
  res.send({
    id:rows.idsertId,
    titulo,
    duracionmin,
    clasificacion,
    lanzamiento

  })
 
}

export const updatePeliculas= async(req,res) => {
  const id = req.params.id
  const {titulo, duracionmin, clasificacion, lanzamiento} = req.body

  const querySQL = `
    UPDATE peliculas SET
      titulo = ?,
      duracionmin = ?,
      clasificacion = ?,
      lanzamiento = ?
    WHERE id = ?
  `

  const [result] = await pool.query(querySQL, [titulo, duracionmin, clasificacion, lanzamiento,id])

  if(result.affectedRows == 0){
    return res.status(404).json({
      message:'El ID no existe'
    })
  }

  res.json({message:'Actualizacion correcta'})


}

export const deletePeliculas= async(req,res) => {
  const [result] = await pool.query("DELETE FROM peliculas WHERE id = ?", [req.params.id])
  if(result.affectedRows <= 0)
    return res.status(404).json({
      message:'No existe registro con este ID'
    })


    res.sendStatus(204)
}


