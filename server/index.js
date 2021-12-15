const express = require('express');
require('dotenv').config();
const app = express();
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();




app.get('/', async (req, res) =>{
    
    

});

app.get('/:coin', async (req, res) => {
    res.send(await getCoin(req.params));
});

app.listen(process.env.PORT || 8080, () =>{
    console.log("Listening on port: " + process.env.PORT);
});
async function getCoin(coin){
    console.log(coin);
    let data = await CoinGeckoClient.simple.price({
        ids:"bitcoin",
        vs_currencies: ['usd'],
    });
    
    return data;
    
};

