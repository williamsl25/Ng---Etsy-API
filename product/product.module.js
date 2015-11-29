(function() {
  'use strict';

  angular
  .module('products', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'product/views/list.html',
        controller: 'ProductController'
      })
      .when('/product/:productId', {
        templateUrl: 'product/views/detail.html',
        controller: 'ProductController'
      })
      .otherwise({ redirectTo: '/404'});
  });


}());
