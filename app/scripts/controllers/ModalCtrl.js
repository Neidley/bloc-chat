(function() {
    function ModalCtrl($uibModal, $rootScope, Room) {
        this.open = function () {
            $rootScope.modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                backdrop: true,
                templateUrl: '../../templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'lg'
            });
        };

        this.ok = function(){
            var roomName = document.querySelector(".modal-body input").value
            if(roomName){
                Room.add(roomName);
                $rootScope.modalInstance.close();
            }
            console.log(this.roomName);
        };
        this.cancel = function($uiModal){
            $rootScope.modalInstance.close();
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$rootScope', 'Room', ModalCtrl]);
})();
