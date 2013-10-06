angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.directives'])
  .config(['$routeProvider',
      function($routeProvider) {
          $routeProvider.
          when('/', {
              templateUrl: 'views/index.html'
          }).
          otherwise({
              redirectTo: '/'
          });
      }
  ]).config(['$locationProvider', //Setting HTML5 Location Mode
      function($locationProvider) {
          $locationProvider.hashPrefix("!");
      }
  ]);

angular.module('mean.system', []);
angular.module('mean.directives', []);