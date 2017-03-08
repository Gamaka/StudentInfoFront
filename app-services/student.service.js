(function () {
    'use strict';

    angular
        .module('studentInfo')
        .factory('StudentService', StudentService);

    StudentService.$inject = ['$http'];
    function StudentService($http) {
        var serverURL = "http://localhost:8080";
        var service = {};

        service.GetAll = GetAll;
        service.GetByRef = GetByRef;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(serverURL+'/student/all').then(handleSuccess, handleError('Error getting all students'));
        }

        function GetByRef(ref) {
            return $http.get(serverURL+'/student/' + ref).then(handleSuccess, handleError('Error getting user by reference id'));
        }

        function Create(student) {
            return $http.post(serverURL+'/student/create', student).then(handleSuccess, handleError('Error creating student'));
        }

        function Update(student) {
            return $http.put(serverURL+'/student/update/' + student.ref, student).then(handleSuccess, handleError('Error updating student'));
        }

        function Delete(ref) {
            return $http.delete(serverURL+'/student/delete/' + ref).then(handleSuccess, handleError('Error deleting student'));
        }

        // private functions
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
