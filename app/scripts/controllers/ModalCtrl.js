(function() {
    function ModalCtrl($uibModalInstance, Room) {
        this.ok = function () {
            if (this.roomName) {
                Room.add(this.roomName);
                $uibModalInstance.close();
            }
        };

        this.cancel = function() {
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
