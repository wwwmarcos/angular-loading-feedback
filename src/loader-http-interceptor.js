(function(){
'use strict';
  angular
  .module('LoadindFeedBackInterceptorModule',[])
  .config(config);

  config.$inject = ['$provide', '$httpProvider'];
  function config($provide, $httpProvider) {
    $provide.factory('LoadindFeedBackInterceptor', LoadindFeedBackInterceptor);

    LoadindFeedBackInterceptor.$inject = ['$q', '$injector', '$rootScope'];
    function LoadindFeedBackInterceptor($q, $injector, $rootScope) {
      var interceptor = {
        request: onRequest,
        response: onResponse,
        requestError: onRequestError,
        responseError: onResponseError
      },
      requestList = [];
      return interceptor;
      
      function onRequest(config){
        openLoading(config.url);
        return config;
      };
      
      function onResponse(response) {
        closeLoading(response.config.url);
        return response;
      };
      
      function onRequestError(rejection) {
        return $q.reject(rejection);
      };
      
      function onResponseError(rejection) {
        return $q.reject(rejection);
      };
      
      function openLoading(configUrl){
        requestList.push(configUrl);
        $rootScope.$broadcast('NewRequestEvent');
      };
      
      function closeLoading(configUrl){
        var index = requestList.indexOf(configUrl);
        requestList.splice(index, 1);
        if (requestList.length == 0) 
          $rootScope.$broadcast('CloseLoadingEvent');
      };
    };
    
    $httpProvider.interceptors.push('LoadindFeedBackInterceptor');
  };
}());
