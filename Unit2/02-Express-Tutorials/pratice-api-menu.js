const express = require("express");
const app = express();
const {menu} = require('./menu')

app
    .get('/', (req, res) => {
        const itemTitle = menu.map((item) => {
            const {title} = item;
            return {title};
        })
        const itemCategory = menu.map((item) => {
            const {category} = item;
            return {category}
        })
        res.json({results: {title: itemTitle, category: itemCategory}, success: true});
    })

    .get('/api/v1/items/:id', (req, res) => {
        const {id} = req.params;
        const menuItem = menu.find((item) => item.id === Number(id));
        if(!menuItem){
            return res.status(404).json({results: [], success: false, message: "Incorrect Menu Item ID"})
        }
        res.json({results: menuItem, success: true})
    })

    .get('/api/v1/query', (req, res) => {
        const {search} = req.query;
        let menuItems = [...menu];
        if(search){
            menuItems = menuItems.filter((item) => {
                return item.category.includes(search)
            })
        }
        if(menuItems.length < 1){
            return res.json({results: [], success: false, message: 'No Menu Category match the search parameters'})
        }
        res.json({results: menuItems, success: true})
    })

    .get('/api/v1/asc', (req, res) => {
        let menuPrices = [...menu];
        menuPrices = menuPrices.sort((prevItem, nextItem) => {
            return prevItem.price - nextItem.price
        })
        if(!menuPrices){
            res.status(404).json({results: [], success: false})
        }
        res.json({results: menuPrices, success: true, message: 'No Results from the string, please use dec or asc'})
    })

    .get('/api/v1/dec', (req, res) => {
        let menuPrices = [...menu];
        menuPrices = menuPrices.sort((prevItem, nextItem) => {
            return nextItem.price - prevItem.price
        })
        if(!menuPrices){
            res.status(404).json({results: [], success: false, message: 'No Results from the string, please use dec or asc'})
        }
        res.json({results: menuPrices, success: true})
    })



    .all("*", (req, res) => {
        res.status(404).send("<h1>Page not found</h1>");
    })
    .listen(3000, () => {
        console.log('Server Listening at port 3000');
    })