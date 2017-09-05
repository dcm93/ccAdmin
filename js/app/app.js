var app = angular.module('angularTest', [
    //'ui-router',
    //'trxApp',
    //'ngSanitize'
]);

app.controller('mainCtrl', function ($scope) {
   /*  $scope.getTemplateUrl = function () {
        console.log($scope.formType);
        if ($scope.formType === "capture") {
            $scope.formTitle = 'Capture!';
            return 'js/app/template/capture.template.html';
        } else if ($scope.formType === "reversal") {
            $scope.formTitle = 'Reversal!';
            return 'js/app/template/reversal.template.html';
        } else {
            $scope.formTitle = 'Return';
            return 'js/app/template/return.template.html';
        }
    }; */
    
});

app.controller('navBarCtrl', function ($scope, $location) {


    // $scope.formType = 'capture';
    /* $scope.isActive = function (path) {
        var currentPath = $location.path.split('/')[1];
        if (currentPath.indexOf('?') !== -1) {

            currentPath = currentPath.split('?')[0];
        }
        return currentPath === path.split('/')[1];
    }; */
    /*  $scope.brand = 'HAL';
     $scope.menus = [
     {
         title:"Transaction",
         menu:[
             {
                 title:"Capture", 
                 action:"capture"
             },
             {
                 title:"Reversal",
                 action:'reversal'
             },
             {
                 title:'Return', 
                 action:'return'
             }
         ],
 
     },
     {
         title:"Lookup",
         menu:[
             {
                 title:'Lookup by Transaction ID',
                 action:'item.lookup'
             }
         ]
     }
 ];
     $scope.item = '';
     $scope.styling = 'Inverse';
     $scope.navFn = funtion(action){
         switch(action){
             case 'capture':
             //emit event/set up event to route
             break;
             case 'reversal':
             break;
             case 'return':
             break;
         }
     };
  */

});

app.controller('TrxController', function () {
    $scope.forms = [
        { title: 'Capture' },
        { title: 'Reversal' },
        { title: 'Return' }
    ];
    $scope.type = "capture";
});
app.directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/app/template/navbar.template.html',
        controller: 'navBarCtrl'
    };
});

app.directive('forma', function () {
    return {
        template: '<div><h2>{{formTitle}}</h2></div><ng-include src="getTemplateUrl()"><ng-include/>',
        restrict: 'E'
        //require:'^trx',
    }
});
app.directive('trx', function () {
    return {
        template: "<div><ul><li><a ng-click='formType=\"capture\"' role='button'>Capture</a></li><li><a ng-click='formType=\"reversal\"' role='button'>Reversal</a></li><li><a ng-click='formType=\"return\"' role='button'>Return</a></li></ul></div><forma></forma><ng-include/>",
        restrict: 'E',
        //require:"^mainCtrl",
        //transclude:true,
        controller: function ($scope) {
            $scope.getTemplateUrl = function () {
                console.log($scope.formType);
                if ($scope.formType === "capture") {
                    $scope.formTitle = 'Capture!';
                    return 'js/app/template/capture.template.html';
                } else if ($scope.formType === "reversal") {
                    $scope.formTitle = 'Reversal!';
                    return 'js/app/template/reversal.template.html';
                } else {
                    $scope.formTitle = 'Return';
                    return 'js/app/template/return.template.html';
                }
            };
        }
        //scope:true,
    };
});

/* app.component('formContainer', {
    bindings:{
        type:'<'
    },
    template:"<div ng-include='$ctrl.templateUrl'></div>",
    controller:function(){
        this.$onChanges = function(changes){
            if(changes.type && this.type){
                this.templateUrl = "js/app/template/" + this.type + 'template.html'
            }
        }
    }
}); */
