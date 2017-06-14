angular.module('nasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, stockDataFactory){

  var vm = this;
  vm.title = 'NASDAQ app';
  vm.isSubmitted = false;

  vm.getStock = function(){
    var stockSymbol = vm.symbol;
<<<<<<< HEAD
    console.log("1.vm.symbol == " + stockSymbol);
=======
    console.log("1.vm.symbol.name == " + vm.symbol);
>>>>>>> 67e62d6ff912fb14daa309984733dbaa033b2aa9
    if (vm.stockForm.$valid){
      console.log("2.inside getStock.if(vm.stockForm.$valid){... " + stockSymbol);
      stockDataFactory.stockDisplay(stockSymbol).then(function(response){
        vm.stock = response;
<<<<<<< HEAD
        console.log("4.after retruning from dataFactory .vm.Stock == " + vm.stock);
        // vm.saveQuery();
        _saveQuery();
        // if (response.status === 200){
        //   console.log("4.response.status == " + response.status);
        //   $route.reload();
        // }
      }).catch(function(error){
        console.log("4.getStock.error == " + error);
=======
        console.log("3.vm.Stock == " + vm.stock);
        if (response.status === 200){
          // vm.addQuery();
          // _addQuery(req, res, vm.stock);
          $route.reload();
        }
      });
      // var queryData = vm.stock;
      // console.log("4.queryData == " + queryData);
      // stockDataFactory.postQuery(stockSymbol).then(function(response){
      //   vm.stock = response;
      //   console.log("3.vm.Stock == " + vm.stock);
      //   // _addQuery(req, res, vm.stock);
      //   if (response.status === 200){
      //     // _addQuery(req, res, vm.stock);
      //     $route.reload();
      //   }
      // })
      .catch(function(error){
        console.log("4.error == " + error);
>>>>>>> 67e62d6ff912fb14daa309984733dbaa033b2aa9
      });
    } else {
      vm.isSubmitted = true;
    }
  };

<<<<<<< HEAD
  var _saveQuery = function(req, res){
  // module.exports.saveQuery = function(req, res, nasdaq){

  	var queryData = new saveQuery({
      symbol : req.body.symbol,
      Name : req.body.Name,
      LastSale : parseInt(req.body.LastTradePriceOnly, 10),
      MarketCap : parseInt(req.body.MarketCapitalization, 10),
      TimeStamp : req.body.created
  	});
    console.log("1.saveQuery.?");
  	queryData.save(function(err){
  		if(err){
  			res
  				.status(500)
  				.json(err);
  		} else {
  			res
          .status(201)
          .json(queryData);
  		}
  	});
  };

  // vm.saveQuery = function(){
  //   var queryData = {
  //     StockName: vm.stock.query.results.quote.Name,
  //     StockSymbol: vm.stock.query.results.quote.symbol,
  //     LastSale: vm.stock.LastSale,
  //     MarketCap: vm.stock.MarketCap,
  //     TimeStamp: vm.stock.query.created
  //   };
  //   console.log("1.saveQuery.StockName == " + queryData.StockName);
  //   console.log("1.saveQuery.vm.symbol.name == " + vm.symbol);
  //   if (vm.stockForm.$valid){
  //     console.log("2.inside saveQuery.if(vm.stockForm.$valid){ " + queryData.StockSymbol);
  //     stockDataFactory.postQuery(queryData).then(function(response){
  //       vm.stock = response;
  //       console.log("3.saveQuery.vm.stock.Name == " + vm.stock.Name);
  //       // if (response.status === 200){
  //       //   $route.reload();
  //       // }
  //     }).catch(function(error){
  //       console.log("4.saveQuery.error == " + error);
=======
  // var _addQuery = function(req, res){
  //   console.log("1.inside _addQuery");

  //   queryData = {
  //     Symbol : req.body.symbol,
  //     Name : req.body.Name,
  //     LastSale : parseInt(req.body.LastTradePriceOnly, 10),
  //     MarketCap : parseInt(req.body.MarketCapitalization, 10),
  //     TimeStamp : req.body.created
  //   }
  //   console.log("2.queryData == " + queryData);
  // 	nasdaq.save(function(err, queryData){
  //     console.log("2.inside nasdaq.save()");
  // 		if(err){
  // 			res
  // 				.status(500)
  // 				.json(err);
  // 		} else {
  // 			res
  //         .status(201)
  //         .json(nasdaqUpdated.storeQueries[nasdaqUpdated.storeQueries.length-1]);
  // 		}
  //     console.log("3.fin.");
  // 	});
  // };

  // vm.addQuery = function(){
  //   console.log("1.inside vm.addQuery");
  //
  //   var queryData = {
  //     Symbol : req.body.symbol,
  //     Name : req.body.Name,
  //     LastSale : parseInt(req.body.LastTradePriceOnly, 10),
  //     MarketCap : parseInt(req.body.MarketCapitalization, 10),
  //     TimeStamp : req.body.created
  //   };
  //   console.log("1.vm.symbol.name == " + vm.symbol);
  //   if (vm.stockForm.$valid){
  //     console.log("2.inside if (vm.stockForm.$valid){ " + stockSymbol);
  //     stockDataFactory.postQuery(queryData).then(function(response){
  //       vm.stock = response;
  //       console.log("3.vm.Stock == " + vm.stock.Name);
  //       _addQuery(req, res, queryData);
  //       if (response.status === 200){
  //         _addQuery(req, res, queryData);
  //         $route.reload();
  //       }
  //     }).catch(function(error){
  //       console.log("4.error == " + error);
>>>>>>> 67e62d6ff912fb14daa309984733dbaa033b2aa9
  //     });
  //   } else {
  //     vm.isSubmitted = true;
  //   }
  // };
}
