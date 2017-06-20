(function() {
    function HomeCtrl($uibModal, Room, Message) {
        this.chatRooms = Room.all;

        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '../../templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        };

        this.activeRoom = '';

        this.getRoom = function(room) {
            this.activeRoom = room.$value;
            // use the room's ID to pull in the messages
            // and make them available to the view's ng-repeat
            this.activeMessages = Message.getByRoomId(room.$id);
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
