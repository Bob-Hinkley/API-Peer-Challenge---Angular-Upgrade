
app.service('GiphyService', function ($http) {

  var url = 'http://api.giphy.com';

  //Random Button

  this.randomService = function () {
    console.log('randomGiphys');
    return $http.get(url + '/v1/gifs/random', {
      params: {
        api_key: 'dc6zaTOxFJmzC'
      }
    }).then(function(response){
      console.log('Got a response from the API: ', response)
      return response.data.data.image_url;
    }).catch(function(err){
      console.log('Error getting infor from the API: ', err);
    });
  };

  //Search Field

  this.searchService = function(search) {
    console.log()
    return $http.get(url + '/v1/gifs/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: search
      }
    }).then(function(response){
      // ctrl.giphyLists = response.data.data;
      // return response.data.data.forEach(function(obj){
      console.log('Searched Giphy: ', response.data.data);
      return response.data.data;
      // })
      // console.log('grabbing random giphys: ', response.data.data);
      // ctrl.imageUrl = response.data.data.image_url;
    }).catch(function(err){
      console.log('error getting data', err);
    });
  }
});
