const Product = require('../models/product')


const getAllProducts = async(req, res) => {
    
    let queryObject = {};

    const {featured, company, name, filteres, sort, fields} = req.query;

    if(featured){
        queryObject.featured = featured;
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'};
    }

    if(filteres){
        const oparatorMap = {
            ">": '$gt',
            "=": '$eq',
            "<": '$lt',
            "<=": '$lte',
            ">=": '$gte'
        }
        
        const re = /\b(<|>|=|<=|>=)\b/g;
        //price>100
        const newFilters = filteres.replace(re, (match)=> `-${oparatorMap[match]}-`);
        //price-$gt-100
        const options = ['rating', 'price']
        newFilters.split(",").forEach((item)=> {
            const [field, oparator, value] = item.split("-");
            //price-$gt-100
            //feild = price
            //oparator = $gt
            //value = 100
            if(options.includes(field)){
                queryObject[field] = {[oparator]: +value}
            }
        });
    }

    let results = Product.find(queryObject);

    if(sort){
        const sortList = sort.split(",").join(" ");
        results = results.sort(sortList)
    } else {
        results = results.sort("-featured -rating price")
    }

    if(fields){
        const fieldsList = fields.split(",").join(" ");
        results = results.select(fieldsList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page -1) * limit;

    results = results.limit(limit).skip(skip)

    const products = await results
    console.log(queryObject)
    return res.json({success: true, results: products, nbHits: products.length});
}


const getAllProductsStatic = (req, res) => {return res.json({method: req.method, products: 'getAllProducts'})}


module.exports = {getAllProducts, getAllProductsStatic}