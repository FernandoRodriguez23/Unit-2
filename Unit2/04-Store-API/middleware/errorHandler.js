const errorHandler = (err, req,res, next) => {
    console.log(err);
    return res.status(500).json({msg: 'somethinf went wrong'})
    
}

module.exports = errorHandler