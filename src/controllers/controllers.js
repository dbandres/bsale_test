import {pool}  from "../../db/dbconexion.js";



export const getAllProducts = async (req, res) =>{
    try {
        const [resultado] = await pool.query("SELECT * FROM product")
        
        if(resultado.length <= 0){
            return res.status(404);
        }
        res.send(resultado);
        
    } catch (error) {
        console.log(error)
    }
}


export const getProductoByName = async(req, res)=>{
    try {
        const [resultado] = await pool.query("SELECT * FROM product WHERE name =  ?", [req.query.name])
        
        res.send(resultado)
        console.log("ESTO ES BY NAME ", resultado[0].name)

        if(resultado.length <= 0){
            return res.status(404)
        }

    } catch (error) {
        console.log("error!!!: ", error)
    }
}

export const getCategory = async(req, res)=>{
    const [products] = await pool.query("SELECT * FROM product WHERE category = ?", [req.query.category]) 
    res.send(products)
}