(function(){
'use strict';
  angular
  .module('LoadingShowDirective', [])
  .directive('loadingShow', loadingShow);
  
  loadingShow.$inject = ['$rootScope'];
  function loadingShow($rootScope){
    var directive = {
      restrict: 'E',
      scope:{
        loadingMessage: '@' 
      },
      templateUrl: 'src/components/loading-show/loading-show.directive.html',
      link: link
    };
    return directive;
    
    function link(scope, element, attrs) {
      scope.ativeLoading = false;
      $rootScope.$on('NewRequestEvent', showThis);
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