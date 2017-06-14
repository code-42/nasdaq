var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');

router
  .route('/')
<<<<<<< HEAD
  .get(ctrlStocks.stocksGetAll)
  .post(ctrlStocks.queryAddOne);
=======
  .get(ctrlStocks.stocksGetAll);
  // .post(ctrlStocks.queryAddOne);
>>>>>>> 67e62d6ff912fb14daa309984733dbaa033b2aa9
  // .get(ctrlStocks.getStockSymbol);

  router
    .route('/stock')
    .get(ctrlStocks.stocksGetAll);
    // .post(ctrlStocks.queryAddOne);
<<<<<<< HEAD
=======
    // .post(ctrlStocks.queryAddOne);
>>>>>>> 67e62d6ff912fb14daa309984733dbaa033b2aa9

router
  .route('/stock/:stockId')
  .get(ctrlStocks.stocksGetOne);


module.exports = router;
