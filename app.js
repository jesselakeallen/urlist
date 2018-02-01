var app = angular.module("myList", ["ui.sortable", "ngSanitize"]);

app.controller("myCtrl", function($scope) {
  $scope.items = ["Apples", "https://github.com/Rocket-Launcher", "www.google.com"];
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.addMe) {
        return;
      }
    if ($scope.items.indexOf($scope.addMe) == -1) {
      $scope.items.push($scope.addMe);
      console.log(linkify($scope.addMe));
  } else {
      $scope.errortext = "Duplicate item";
  }
  }

  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.items.splice(x, 1);
  }

  $scope.checkItem = function (x) {
    var input = "";
    console.log(ValidURL(x));
    console.log(linkify(x));
    if (ValidURL(x)) {
    input = linkify(x);
    return input;
    } else {
      return input;
    }
  }
});