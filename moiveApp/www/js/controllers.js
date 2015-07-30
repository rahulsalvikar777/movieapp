angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })

    .controller('MovieListController', function ($scope, $stateParams, ClientAPI, URL_CONFIG) {

        ClientAPI.setURL('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id');
        ClientAPI.setParameters({id: '@_id'});

        $scope.movies = ClientAPI.callAPIClient().query();

        $scope.deleteMovie = function (movie) {
            movie.$delete(function onSuccess() {
                alert('Movie Deleted');
                $scope.movies = ClientAPI.callAPIClient().query();
            }, function onError() {
                alert('Movie Deleted error');
            });

        }
    })

    .controller('MovieViewController', function ($scope, $stateParams, ClientAPI) {
        $scope.movie = ClientAPI.callAPIClient().get({id: $stateParams.id});
    })

    .controller('MovieCreateController', function ($scope, $state, $stateParams, ClientAPI) {
        $scope.movie = new ClientAPI.callAPIClient();
        $scope.addMovie = function () {
            $scope.movie.$save(function () {
                $state.go('app.movies');
            });
        }
    })

    .controller('MovieEditController', function ($scope, $state, $stateParams, ClientAPI) {
        $scope.updateMovie = function () {
            $scope.movie.$update(function () {
                $state.go('app.movies');
            });
        };

        $scope.loadMovie = function () {
            $scope.movie = ClientAPI.callAPIClient().get({id: $stateParams.id});
        };

        $scope.loadMovie();
    })
;
