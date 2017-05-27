// var Client = require('coinbase').Client;
// var client = new Client({'apiKey': 'API KEY',
//                          'apiSecret': 'API SECRET'});

// const autobahn = require("autobahn")
// const wsuri = "wss://api.poloniex.com"
// const connection = new autobahn.Connection({
// 	url: wsuri,
// 	realm: "realm1"
// })


 
// connection.onopen = (session) => {


//     function tickerEvent (args,kwargs) {
//         //console.log(args)
//         if (args[0] == "BTC_ETH"){
//         	console.log()
// 			client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, price) {
// 			  console.log(Date.now(), "ETH: " + args[1] + " BTC " + "Conversion: " + args[1]*price.data.amount + " " + price.data.currency);
// 			});
//         }
//     }

//     session.subscribe('ticker', tickerEvent)

// }
 
// connection.onclose = () => {
// 	console.log("Websocket connection closed")
// }
                       
// connection.open()

const request = require('request')
request('https://api.exchange.coinbase.com/products/BTC-USD/trades?limit=1', (err, res, body)=>{
    console.log(err)
    console.log(res && res.statusCode)
    console.log(body)
})