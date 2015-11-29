(function() {
  'use strict';
    angular.module('products')
    .controller('ProductController', function ($scope, ProductService, $routeParams) {
        ProductService.getProducts().then(function(products){
          $scope.products = products;
        });
        ProductService.getProduct($routeParams.listing_id).then(function(product){
          $scope.product = product;
        })
    })
    .controller('MainController', function ($rootScope, CartService) {
        $scope.addToCart = function(product) {
          CartService.addToCart(product);
        };
      });
}());
