(function () {
    'use strict';
    
    angular
        .module('studentInfo')
        .controller('studentListController', ['$rootScope','StudentService', studentListController])
    ;

    function studentListController($rootScope,StudentService) {
        var vm = this;
        
        vm.NavigateToStudent = navigateStudent;
    

        (function initController()
        {
            vm.StudentList = studentList();
        })();        
        
        function studentList()
        {
            return StudentService.GetAll();
        }
        
        function navigateToStudent(reference)
        {
            //
        }
    }
})();
