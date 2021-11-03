const notFound = (req,res) => {
    res.status(404).send("Route does not exsits")
}

module.exports = notFound