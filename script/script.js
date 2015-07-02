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
        
        return RESTFactory;
    }]);

//Controller
angular.module('ReputationLoop')
    .controller('reviewsController', ['$scope', 'RESTFactory',
        function ($scope, RESTFactory) {
            
            var RowsPerPage = 6;
            var TotalRows = 1000;
            var startItem = 0;
            var endItem = RowsPerPage;
            
            
            getReviews(TotalRows);
            
            function getReviews(rows) {
                RESTFactory.getAll(rows)
                    .success(function (reviews) {
                        $scope.rootReviews = reviews;
                    
                        var NumOfPages = Math.floor($scope.rootReviews.reviews.length / RowsPerPage);
                        if(($scope.rootReviews.reviews.length % RowsPerPage) > 0) NumOfPages++;
                        
                        var tmp = $scope.rootReviews.reviews;
                        $scope.reviews = tmp.slice(startItem,endItem);
                        $scope.PageCount = NumOfPages;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load reviews: ' + error.message;
                    });
            }
            
            $scope.getThisPage = function(s){

                    startItem = (s - 1) * RowsPerPage;
                    endItem = startItem + RowsPerPage;

                    var tmp = $scope.rootReviews.reviews;
                    $scope.reviews = tmp.slice(startItem,endItem);
            }
        }]);

//For filter function
angular.module('ReputationLoop')
    .filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            for (var i=0; i<total; i++)
              input.push(i);
            return input;
        };
    });
