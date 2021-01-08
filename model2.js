!function(){
	 "use strict";
	  var facultyList=["Mr.Karthikeyan","Mrs.Santhiya","Mrs.Jeyamala","Mr.Jeyachandran","Mr.Ramanujam"];

	  var courseDetails=[
	  {name:"Mr.Karthikeyan",course:"WT",salary:50000,years:10},
	  {name:"Mrs.Santhiya",course:"Acc",salary:50000,years:12},
	  {name:"Mrs.Jeyamala",course:"IS",salary:50000,years:10},

	  ]
	  angular.module('modelApp',[])
	  .controller('repController',repController);
	  function repController($scope){
	  	    $scope.facultyList=facultyList;
	      	$scope.courseDetails=courseDetails;
	      }

}();