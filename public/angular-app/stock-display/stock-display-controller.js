angular.module('nasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, stockDataFactory){
  var vm = this;
  vm.titlee = 'NASDAQ stock app';
  var id = $routeParams.id;
  vm.isSubmitted = false;

  stockDataFactory.stockDisplay(id).then(function (response) {
    console.log("1.response == " + response);
 	 //  vm.stock = response.data;
   vm.stock = response;
  });
}