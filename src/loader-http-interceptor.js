/**
* Basic loading for requisitions in angulars apps
* in construction :)
* Thanks for the loading css @brunjo - http://codepen.io/brunjo/pen/vELmaP   
*/
(function(){
'use strict';
  angular
  .module('LoadindFeedBackInterceptorModule',[])
  .directive('loadingShow', loadingShow)
  .config(config);

  config.$inject = ['$provide', '$httpProvider'];
  function config($provide, $httpProvider) {
    $provide.factory('LoadindFeedBackInterceptor', LoadindFeedBackInterceptor);

    LoadindFeedBackInterceptor.$inject = ['$q', '$rootScope'];
    function LoadindFeedBackInterceptor($q, $rootScope) {
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
        console.log('loading ...')
        requestList.push(configUrl);
        $rootScope.$broadcast('OpenLoadindEvent');
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
  
  loadingShow.$inject = ['$rootScope'];
  function loadingShow($rootScope){
    var directive = {
      restrict: 'E',
      scope:{
        loadingMessage: '@',
      },
      template:
       '  <div data-ng-if="ativeLoading" class="loading-modal">'
       +    '<div class="loading-modal-body">'   
       +      '<i class="signal"></i>'
       +    '</div>'
       +  '</div>',
      link: link
    };
    return directive;
    
    function link(scope, element, attrs) {
      scope.ativeLoading = false;
      $rootScope.$on('OpenLoadindEvent', showThis);
      $rootScope.$on('CloseLoadingEvent', hideThis);
      
      function showThis(){
        scope.ativeLoading = true;
      };
      
      function hideThis(){
        scope.ativeLoading = false;
      };
    };
  };
}());

