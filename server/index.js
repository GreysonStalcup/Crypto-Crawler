const express = require('express');
require('dotenv').config();
const app = express();
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
const { isNumber } = require('coingecko-api/lib/helpers/utilities');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();




app.get('/', async (req, res) =>{
    
    const coin = req.query.coin;
    const dataStuff = await getCoinPrice(coin);
    //let priceOfCoin = data.coin.usd;
    // console.log(priceOfCoin);
    res.send(dataStuff)
    
    // dataStuff.data[coin].usd
    

    
    

});



app.listen(process.env.PORT || 8080, () =>{
    console.log("Listening on port: " + process.env.PORT);
});
async function getCoinPrice(coin){
    console.log(coin);
    let data = await CoinGeckoClient.simple.price({
        ids: coin,
        vs_currencies: ['usd'],
    });
    //let coinName = coin.toString();
    //console.log(coinName)
    console.log(data.data[coin].usd)
    const info = {
        coin: coin,
        usd: data.data[coin].usd
    };
    return info;
    console.log(info) 
    
};

async function getCoinLastRefresh(coin){
    
}

