import  {pool}  from "../../db/dbconexion.js ";

export const getSearch = async(req, res) => {
    const [products] = await pool.query("SELECT * FROM product");
    res.json(products);
}

