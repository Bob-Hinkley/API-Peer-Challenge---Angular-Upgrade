var app = angular.module('giphyApp', []);

app.controller('giphyController', function(GiphyService) {
  console.log('Giphy Controller loaded!')



var ctrl = this;




// $http.get(url + '/v1/gifs/random', {
//     params: {
//       api_key: 'dc6zaTOxFJmzC'
//     }
// }).then(function(response) {
//   console.log('grabbing random giphy: ', response);
// }).catch(function(err){
//   console.log('error getting data', err);
// })



//******** OLD CODE ********//
// ctrl.randomGiphy = function() {
//   console.log('Random button was clicked!')
//   $http.get(url + '/v1/gifs/random', {
//       params: {
//         api_key: 'dc6zaTOxFJmzC'
//       }
//   }).then(function(response) {
//     console.log('grabbing random giphy: ', response.data.data.image_url);
//     ctrl.imageUrl = response.data.data.image_url;
//   }).catch(function(err){
//     console.log('error getting data', err);
//   })
// }

// ctrl.giphyObj = [];
//random button
ctrl.randomGiphy = function() {
  GiphyService.randomService().then(function(giphyList) {
    ctrl.giphyObj = giphyList;
  });
};

//search field
ctrl.searchGiphy = function() {
  GiphyService.searchService(ctrl.search).then(function(giphyList){
    ctrl.giphySearchList = giphyList;
  });
};

//******** OLD CODE ********//
// ctrl.searchGiphy = function() {
//   console.log('search field was used!');
//   console.log(ctrl.search);
//   $http.get(url + '/v1/gifs/search', {
//       params: {
//         api_key: 'dc6zaTOxFJmzC',
//         q: ctrl.search
//       }
//   }).then(function(response) {
//     ctrl.giphyList = response.data.data;
//     response.data.data.forEach(function(obj){
//       console.log(obj.images.original.url);
//     })
//     console.log('grabbing random giphy: ', response.data.data);
//     // ctrl.imageUrl = response.data.data.image_url;
//   }).catch(function(err){
//     console.log('error getting data', err);
//   })
// }





})
