(function() {
    function HomeCtrl($uibModal, Room) {
        this.chatRooms = Room.all;

        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '../../templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
