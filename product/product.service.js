(function() {
  'use strict';
    angular.module('EtsyProducts')
    .factory('ProductService', function ($http, _) {
          var productsUrl = 'https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&keywords=running&api_key=pqzggronpdyyylbcooa8g7gg&callback=JSON_CALLBACK';
          var mapData = function (collection) {
              return _.map(collection, function(obj){
                return {
                  listing_id: obj.listing_id,
                  url: obj.url, title: obj.title,
                  img_170x135: obj.MainImage.url_170x135,
                  img_570xN: obj.MainImage.url_570xN, description:
                  obj.description,
                  materials: obj.materials,
                  price: obj.price
                }
            })
          };
          var getProduct = function(listing_id) {
            return $http.jsonp(productsUrl).then(function(products){
              var singleProductArray = _.where(products.data.results, {listing_id: Number(listing_id)});
                return mapData(singleProductArray)[0];
            })
          };
          var getProducts = function () {
            return $http.jsonp(productsUrl).then(function(products) {
              var productArray = products.data.results;
              return mapData(productArray);
            })
          };
          return {
          getProducts: getProducts,
          getProduct: getProduct
          };
      })
}());
