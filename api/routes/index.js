var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stock.controllers.js');
var ctrlQuery = require('../controllers/querys.controllers.js');

router
  .route('/')
  .get(ctrlStocks.stocksGetAll);
  // .post(ctrlStocks.queryAddOne);

router
  .route('/stock')
  // .get(ctrlStocks.stocksGetAll)
  .post(ctrlQuery.query);
  // .post(ctrlStocks.queryAddOne);

router
  .route('/stock/:stockId')
  .get(ctrlStocks.stocksGetOne);

router
  .route('/#/')
  .post(ctrlQuery.query);

module.exports = router;
