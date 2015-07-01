// Setup module
var ReputationLoop = angular.module('ReputationLoop', ['ngRoute', 'ngResource']);

// Setup Route
ReputationLoop.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'reviewsController',
            templateUrl: 'views/review/reviews.php'
        })
        .otherwise({ redirectTo: '/' });
});

// REST client factory
angular.module('ReputationLoop')
    .factory('RESTFactory', ['$http', function ($http) {
        var urlBase = 'lib/lib.php';
        var RESTFactory = {};

        RESTFactory.getAll = function (rows) {
            var query = urlBase + '?rows=' + rows;
            return $http.get(query);
        };
        
        /* Ready for REST queries
        RESTFactory.get = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        RESTFactory.create = function (review) {
            return $http.post(urlBase, review);
        };

        RESTFactory.update = function (review) {
            return $http.put(urlBase + '/' + review.id, review)
        };

        RESTFactory.delete = function (id) {
            return $http.delete(urlBase + '/' + id);
        };*/
        
        return RESTFactory;
    }]);

angular.module('ReputationLoop')
    .controller('reviewsController', ['$scope', 'RESTFactory',
        function ($scope, RESTFactory) {
            getReviews(100);
            
            function getReviews(rows) {
                RESTFactory.getAll(rows)
                    .success(function (reviews) {
                        $scope.reviews = reviews;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load reviews: ' + error.message;
                    });
            }
        }]);

angular.module('ReputationLoop')
    .filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

function refresh(rows){
    alert(rows);
    angular.element($('body')).scope().getReviews(rows);
    angular.element($('body')).scope().$apply();
}
