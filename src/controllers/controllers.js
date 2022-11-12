import { pool } from "../../db/dbconexion.js";

export const getRoute = async (req, res) =>{
    try {
        const [resultado] = await pool.query("SELECT * FROM product WHERE id = ?", [req.params.id])
        
        if(resultado.length <= 0){
            return res.status(404);
        }
        res.send(resultado[0]);
        
    } catch (error) {
        console.log(error)
    }
}