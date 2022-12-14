const validateRecipe = (req,res,next) => {
    const {name,summary} =req.body;
    if(!name) return res.status(400).json({error: "El nombre es obligatorio"});
    if(!summary) return res.status(400).json({error: "El resumen del plato es obligatorio"})

    next();
}

module.exports = {
    validateRecipe
}