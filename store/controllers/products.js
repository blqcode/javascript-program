
 
const getAllProducts = async (req,res) => {
    res.status(200).json({msg:`product testing route`})
}
const getAllProductsStatic = async (req,res) => {
    res.status(200).json({msg:`product testing route`})
}
module.exports= {getAllProducts,getAllProductsStatic}