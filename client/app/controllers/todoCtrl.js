angular.module('demo').controller('demoCtrl', demoCtrl);

function demoCtrl($scope){
    $scope.todos = [];
    $scope.index = -1;

    $scope.addTodo = function(){
        if($scope.todo!="" && $scope.todo!=null && $scope.todo!=undefined && $scope.index==-1){
            $scope.todos.push($scope.todo);
        }
        else if($scope.index!=-1 && $scope.index!=undefined){
            $scope.todos[$scope.index] = $scope.todo;
            $scope.index = -1;
        }
        $scope.todo = "";
    }

    $scope.deleteTodo = function(index){
        $scope.todos.splice(index,1);
    }

    $scope.editTodo = function(val, indx){
        $scope.todo = val;
        $scope.index = indx;
    }

}
