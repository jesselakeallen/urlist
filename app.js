  var app = angular.module("myList", ["ui.sortable"]);

  app.controller("myCtrl", function($scope) {
    $scope.items = ["A", "B", "C"];
    $scope.addItem = function () {
      $scope.errortext = "";
      if (!$scope.addMe) {return;}
      if ($scope.items.indexOf($scope.addMe) == -1) {
        $scope.items.push($scope.addMe);

    

      } else {
        $scope.errortext = "Duplicate item";
      }

    }

    $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.items.splice(x, 1);
    }
  });