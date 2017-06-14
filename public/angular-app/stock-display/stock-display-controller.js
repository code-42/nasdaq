angular.module('nasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, stockDataFactory){
  var vm = this;
  vm.title = 'NASDAQ app';
  vm.isSubmitted = false;

  vm.getStock = function(){
    var stockSymbol = vm.symbol;
    console.log("1.vm.symbol == " + stockSymbol);
    if (vm.stockForm.$valid){
      console.log("2.inside getStock.if(vm.stockForm.$valid){... " + stockSymbol);
      stockDataFactory.stockDisplay(stockSymbol).then(function(response){
        vm.stock = response;
        console.log("4.after retruning from dataFactory .vm.Stock == " + vm.stock);
        // vm.saveQuery();
        _saveQuery();
        // if (response.status === 200){
        //   console.log("4.response.status == " + response.status);
        //   $route.reload();
        // }
      }).catch(function(error){
        console.log("4.getStock.error == " + error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };

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
  //     });
  //   } else {
  //     vm.isSubmitted = true;
  //   }
  // };
}
