﻿var scotchApp = angular.module('scotchApp.stockReconciliation', ['ngRoute']);
scotchApp.controller('stockReconciliationController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

   
    //dateTime
    $scope.strartdatePic = false;
    $scope.strartDatehide = true;
    $scope.enddatePic = false;
    $scope.endDatehide = true;
    

    $scope.hideHeadingDiv = false;
    $scope.hideSelectDiv = false;
    $scope.Printdiv = true;
    //for Mdale

    $scope.dailySalesRegwModal = false;
    $scope.toggleModal = function ()
    {
        $scope.dailySalesRegwModal = !$scope.dailySalesRegwModal;
    }
   
    

    //for all show and hide div
    $scope.showhide = function () {
        //dateTime
        $scope.strartdatePic = true;
        $scope.strartDatehide = false;
        $scope.enddatePic = true;
        $scope.endDatehide = false;
        $scope.maindiv = false;
        $scope.Printdiv = true;

        var duration = this.selectDuration;
        var currentdate = $filter('date')(new Date(), 'yyyy-MM-dd');

        if (duration == "Today") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            // var newDate = addDays(currentdate, 5);
            // alert("newDate=" + newDate);

            $scope.startDatesss = $filter('date')(new Date(), 'yyyy-MM-ddThh:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddThh:mm:ss');
        }

        if (duration == "LastWeek") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newday = parseInt(day) - 7;
            if (newday <= 0) {
                newday = 31 + newday;
                month = month - 1;
                if (month <= 0) {
                    month = 12 - month;
                    year = year - 1;
                }
            }

            var newDate = year + "-" + month + "-" + newday + "T00:00:00";
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss');
        }

        if (duration == "Last15Day") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newday = parseInt(day) - 15;
            if (newday <= 0) {
                newday = 31 + newday;
                month = month - 1;
                if (month <= 0) {
                    month = 12 - month;
                    year = year - 1;
                }
            }

            var newDate = year + "-" + month + "-" + newday + "T00:00:00";
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss');

        }
        if (duration == "LastMonths") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newmonth = parseInt(month) - 01;
            if (newmonth <= 0) {
                newmonth = 12 + newmonth;
                year = year - 1;
            }
            var newDate = year + "-" + newmonth + "-" + day;
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //cend date=current date
        }
        if (duration == "Last3Months") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newmonth = parseInt(month) - 03;
            if (newmonth <= 0) {
                newmonth = 12 + newmonth;
                year = year - 1;
            }
            var newDate = year + "-" + newmonth + "-" + day;
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //end date=current date
        }
        if (duration == "Last6Months") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newmonth = parseInt(month) - 06;
            if (newmonth <= 0) {
                newmonth = 12 + newmonth;
                year = year - 1;
            }
            var newDate = year + "-" + newmonth + "-" + day + "T00:00:00";
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //end date=current date
        }
        if (duration == "LastYear") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newyear = parseInt(year) - 1;

            var newDate = newyear + "-" + month + "-" + day;
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //end date=current date
        }

        //for Customer & item Wise Sale
        $scope.maindiv = false;
        $scope.Printdiv = true;

        //for Customer wise sale modal
        $scope.custWisediv = false;
        $scope.custwisePrintDiv = true;
    }
    // date textbox

    $scope.textDate = function () {
          //dateTime
    $scope.strartdatePic = false;
    $scope.strartDatehide = true;
    $scope.enddatePic = false;
    $scope.endDatehide = true;
    }
    

    $scope.StockReconciliation = function () {


       
        var getTotal;
        $scope.GrandTotal = 0;

        var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

        var startdate = $filter('date')($scope.startDatesss, 'yyyy-MM-dd');
        var enddate = $filter('date')($scope.endDatesss, 'yyyy-MM-dd');
        $scope.array = [];
        var Id;
        var ItemName;
        var Opening;
        var Purchases;
        var getPurchase;
        var In;
        var Out;
        var Sales;
        var Closing;
        var Code;
        var SP_stock;
        $scope.newArray = [];
    
        $http.get('http://minvent.azurewebsites.net/api/View_StockReconciliations')
                   .success(function (res)
                   {
                       var resCount = res.length;
                       if (resCount==0)
                       {
                           alert("No Record To Print The Report");
                       }
                       else
                           {
                       $scope.hideHeadingDiv = true;
                       $scope.hideSelectDiv = true;
                       $scope.Printdiv = false;

                       $scope.getStock = res;
                       getTotal = $scope.getStock;
                       //alert(getTotal);
                       var count = getTotal.length;
                       for (var i = 0; i < count; i++) {
                           var id = getTotal[i].Id;
                          
                           $http.get('http://minvent.azurewebsites.net/api/SP_Stock_Reconcilation/' + id + '?startdate=' + startdate + '&enddate=' + enddate)
                                           .success(function (res) {
                                               $scope.getSP_stock = res;
                                               var SP_stock = $scope.getSP_stock;
                                               
                                                   $scope.array.push({
                                                       Id: SP_stock[0].Id,
                                                       Code: SP_stock[0].Code,
                                                       ItemName: SP_stock[0].ItemName,
                                                       Opening: SP_stock[0].OpeningStock,
                                                       Purchases: SP_stock[0].Purchase,
                                                        //In:getTotal[i].AllowInword,
                                                        //Out:getTotal[i].AllowOutword,
                                                       Sales: SP_stock[0].Sales,
                                                       Closing: SP_stock[0].TotalQuantity
                                                   })

                                          })

                                     }//end for loop
                               }//end if loop
                             })
                      
                      }//end method
   
    
    $scope.Print = function ()
    {
        
       
      
       window.print(); return false;
      

    }

})
