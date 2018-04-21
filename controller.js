var app = angular.module("empList", []); 
app.controller("myCtrl", function($scope,$http) {
    console.log("in controller");
    $scope.products = ["Milk", "Bread", "Cheese"];
      //=====================================================================
    //================Json Hit For Get Countries ================//
    // $http.get('employee.json').success(function (data) {
    //     $scope.countries = data;
    //     console.log("countroes",$scope.countries);
    // });

//     $http.get('employee.json')
// .success(function(data) {
//     console.log("in success",data);
// })
// .error(function(data, status) {
//   console.error('Repos error', status, data);
// })
// .finally(function() {
//   console.log("finally finished repos");
// });
// $http({
//       method: 'GET',
//       url: 'employee.json'
//    }).then(function (response){
//     console.log("in success",response);
//    },function (error){
//        console.log("in error",error);
//    });

//    $http.get('employee.json').then(successCallback, errorCallback);

// function successCallback(response){
//     //success code
//     console.log("in success",JSON.parse(response));
// }
// function errorCallback(error){
//     console.log("in error",error);
//     //error code
// }
});