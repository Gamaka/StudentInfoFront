(function(){
    'use strict';
    
    angular
        .module("studentInfo",['ui.router'])  
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider','$urlRouterProvider'];
    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/students');
        $stateProvider
            .state('students', {
                url: '/students',
                templateUrl: 'app/students/partial.students.list.html',
                controller: 'studentListController',
                controllerAs: 'vm'
            })
            .state('view', {
                url: '/view',
                templateUrl: 'app/students/partial.student.view.html',
                controller: 'studentViewController',
                controllerAs: 'vm'
            })
            .state('edit', {
                url: '/edit',
                templateUrl: 'app/students/partial.student.edit.html',
                controller: 'studentEditController',
                controllerAs: 'vm'
            })
            .state('add', {
                url: '/add',
                templateUrl: 'app/students/partial.student.add.html',
                controller: 'studentAddController',
                controllerAs: 'vm'
            })
    }
    
    run.$inject = ['$rootScope', '$state', '$http'];
    function run($rootScope, $state, $http) {
        $rootScope.$on('$stateChangeError', console.log.bind(console));
        window.onbeforeunload = function (e) {
            $state.go('students');
        }
        
    }
})();