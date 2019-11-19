var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {

    // JSON ARRAY TO POPULATE TABLE.
    $scope.movieArray =
    [
        { 'name': 'Total Eclipse', 'director': 'Agniezka Hollan' },
        { 'name': 'My Left Foot', 'director': 'Jim Sheridan' },
        { 'name': 'Forest Gump', 'director': 'Robert Zemeckis' }
    ];

    // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
    $scope.addRow = function () {
        if ($scope.name != undefined && $scope.director != undefined) {
            var movie = [];
            movie.name = $scope.name;
            movie.director = $scope.director;

            $scope.movieArray.push(movie);

            // CLEAR TEXTBOX.
            $scope.name = null;
            $scope.director = null;
        }
    };

    // REMOVE SELECTED ROW(s) FROM TABLE.
    $scope.removeRow = function () {
        var arrMovie = [];
        angular.forEach($scope.movieArray, function (value) {
            if (!value.Remove) {
                arrMovie.push(value);
            }
        });
        $scope.movieArray = arrMovie;
    };

    // FINALLY SUBMIT THE DATA.
    $scope.submit = function () {
        var arrMovie = [];
        angular.forEach($scope.movieArray, function (value) {
            arrMovie.push('Name:' + value.name + ', Director:' + value.director);
        });
        $scope.display = arrMovie;
    };
});

