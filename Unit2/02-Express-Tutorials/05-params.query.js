const express = require("express");
const app = express();
const { products } = require("./data");

app
  .get("/", (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a> ');
  })

  .get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image } = product;
      return { name, id, image };
    });
    res.json({ results: newProducts, success: true });
  })

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //Search using params
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  .get("/api/products/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id));
    if (!singleProduct) {
      return res
        .status(404)
        .json({ results: [], success: false, message: "No Matching ID found" });
    }
    res.json({ results: [singleProduct], seccess: true });
  })

  .get('/api/priceing/:price', (req, res) => {
      const {price} = req.params;
      const lowerPrice = products.filter((product) => product.price < Number(price));
      if(!lowerPrice){
          return res.status(404).json({resluts: [], success: false, message: "Lower Prices not Found"});
      }
      res.json({results: lowerPrice, success: true});
  })

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    //Search with query
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  .get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    console.log(req.query);
    //create a in-utiable copy of the data
    //let newProducts = products    is utaibale, bad
    //let newProducts = products.map((products) => {})  utaible, bad
    let sortedProducts = [...products];  //is utable, good
    if(search){
        sortedProducts =  sortedProducts.filter((product) => {
            return product.name.includes(search)
        })
    }
    if(limit){
       sortedProducts =  sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        return res.json({results: [], success: false, message: 'No Products match the search parameters'})
    }
    res.json({results: sortedProducts, success: true})
  })

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



  .all("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
  })

  .listen(3000, () => {
    console.log("Server is listening at port 3000...");
  });