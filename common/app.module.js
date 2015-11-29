(function() {
  'use strict';

  angular
    .module('EtsyProducts', [
      'ngRoute',
      'underscore',
      'products'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to Etsy Products Cart</h1><a href="#/products">go to products</a>',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h1> Sorry, page not found!</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });



}());
